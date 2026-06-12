import Leads from "../models/leads.model.js";

export const getAnalytics = async (req, res) => {
  try {
    const [sourceStats, totalLeads,
      websiteLeads,
      metaLeads,
      googleLeads,] = await Promise.all([ Leads.aggregate([
      {
        $group: {
          _id: "$source",
          totalLeads: {
            $sum: 1,
          },
        },
      },
      {
        $project: {
          _id: 0,
          source: "$_id",
          totalLeads: 1,
        },
      },
      {
        $sort: {
          totalLeads: -1,
        },
      },
    ]),

    Leads.countDocuments(),

    Leads.countDocuments({
      source: "website",
    }),

    Leads.countDocuments({
      source: "meta ads",
    }),

     Leads.countDocuments({
      source: "google ads",
    })
])
    res.status(200).json({
      totalLeads,
      websiteLeads,
      metaLeads,
      googleLeads,
      sourceStats
    });

    // res.status(200).json({
    //   success: true,
    //   data: sourceStats,
    // });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
