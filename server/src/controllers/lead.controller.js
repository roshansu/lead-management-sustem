import Leads from "../models/leads.model.js";
import User from "../models/user.model.js";

export const getAllLeads = async (req, res) => {
  try {
    const {
      page = 1,
      campaign,
      keyword,
      source,
      platform,
      service,
      search,
    } = req.query;

    // console.log("campaign",campaign,"keyword", keyword, "source", source, "platform", platform, "service", service)
    // console.log("search - ", search)
    const limit = 10;
    const skip = (page - 1) * limit;

    const filter = {};

    if (campaign) {
      filter.campaign = campaign;
    }

    if (keyword) {
      filter.keyword = keyword;
    }

    if (source) {
      filter.source = source;
    }

    if (platform) {
      filter.platform = platform;
    }

    if (service) {
      filter.service = service;
    }

    if (search) {
      filter.$or = [
        {
          fullName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
        {
          phone: {
            $regex: search,
            $options: "i",
          },
        },
        {
          keyword: {
            $regex: search,
            $options: "i",
          },
        },
        {
          source: {
            $regex: search,
            $options: "i",
          },
        },
        {
          service: {
            $regex: search,
            $options: "i",
          },
        },
        {
          platform: {
            $regex: search,
            $options: "i",
          },
        },
        {
          campaign: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const [leads, total] = await Promise.all([
      Leads.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),

      Leads.countDocuments(filter),
    ]);

    return res.status(200).json({
      success: true,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      totalLeads: total,
      limit,
      leads,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
    });
  }
};

export const assignLead = async (req, res) => {
  try {
    const { leadId, employeeId, name } = req.query;

    const [lead, employe] = await Promise.all([
      Leads.findOneAndUpdate(
        { _id: leadId },
        { assignedTo: name, assignedId: employeeId },
      ),
      User.findOneAndUpdate(
        { _id: employeeId },
        {
          $push: {
            assignedList: leadId,
          },
        },
      ),
    ]);

    res.status(200).json({
      success: true,
      message: "Assigned success",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getAssignedLeads = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "", source = "" } = req.query;

    const query = {
      assignedTo: {
        $exists: true,
        $nin: [null, ""],
      },
    };
    if (source) {
      query.source = source;
    }

    if (search) {
      query.$or = [
        {
          fullName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
        {
          phone: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const totalLeads = await Leads.countDocuments(query);

    const leads = await Leads.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    console.log(leads);

    return res.status(200).json({
      success: true,
      leads,
      currentPage: Number(page),
      totalPages: Math.ceil(totalLeads / limit),
      totalLeads,
      limit: Number(limit),
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
