import transporter from "../config/emailConfig.js";

const template = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Lead Insights Report</title>
</head>
<body style="font-family: Arial, sans-serif; background:#f4f4f5; padding:30px;">

  <div style="max-width:600px; margin:auto; background:white; border-radius:12px; overflow:hidden;">

    <div style="background:#111827; padding:25px; text-align:center;">
      <h1 style="color:white; margin:0;">
        Lead Insights Report
      </h1>
    </div>

    <div style="padding:30px;">

      <h2 style="color:#111827;">
        Today's Lead Summary
      </h2>

      <table width="100%" cellpadding="12" style="border-collapse:collapse; margin-top:20px;">

        <tr style="background:#f9fafb;">
          <th align="left">Source</th>
          <th align="center">Total Leads</th>
        </tr>

        <tr>
          <td>🌐 Website</td>
          <td align="center"><strong>{{websiteLeads}}</strong></td>
        </tr>

        <tr>
          <td>📘 Meta Ads</td>
          <td align="center"><strong>{{metaLeads}}</strong></td>
        </tr>

        <tr>
          <td>🔍 Google Ads</td>
          <td align="center"><strong>{{googleLeads}}</strong></td>
        </tr>

        <tr style="background:#f9fafb;">
          <td><strong>Total Leads</strong></td>
          <td align="center">
            <strong>{{totalLeads}}</strong>
          </td>
        </tr>

      </table>

      <p style="margin-top:30px; color:#6b7280;">
        Generated automatically by Lead Management System.
      </p>

    </div>

  </div>

</body>
</html>
`

const leadInsightEmail = async(websiteLeads,metaLeads,googleLeads,totalLeads, emails)=>{
    const html = template
    .replace("{{websiteLeads}}", websiteLeads)
    .replace("{{metaLeads}}", metaLeads)
    .replace("{{googleLeads}}", googleLeads)
    .replace("{{totalLeads}}", totalLeads)

 await Promise.all(
  emails.map((email) =>
    transporter.sendMail({
      to: email,
      subject: "Daily Lead Insights Report",
      html
    })
  )
);
}

export default leadInsightEmail