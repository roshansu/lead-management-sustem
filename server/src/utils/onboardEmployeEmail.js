import transporter from "../config/emailConfig.js";

const onboardingTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Employee Onboarding</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">

        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#111827;padding:30px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;">
                Welcome to Lead Flow
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px;">

              <h2 style="margin-top:0;color:#111827;">
                Hello {{employeeName}},
              </h2>

              <p style="font-size:16px;line-height:1.6;color:#4b5563;">
                Welcome to the team! Your employee account has been successfully created.
                Below are your login credentials.
              </p>

              <!-- Credentials Card -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;margin:25px 0;">
                <tr>
                  <td style="padding:25px;">

                    <p style="margin:0 0 15px;font-size:15px;color:#6b7280;">
                      Login Credentials
                    </p>

                    <p style="margin:10px 0;">
                      <strong>Email:</strong>
                      {{email}}
                    </p>

                    <p style="margin:10px 0;">
                      <strong>Password:</strong>
                      {{password}}
                    </p>

                  </td>
                </tr>
              </table>

              <!-- Login Button -->
              <div style="text-align:center;margin:35px 0;">
                <a
                  href="{{loginUrl}}"
                  style="
                    background:#111827;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 28px;
                    border-radius:8px;
                    display:inline-block;
                    font-weight:bold;
                  "
                >
                  Login Now
                </a>
              </div>

              <!-- Security Notice -->
              <div
                style="
                  background:#fff7ed;
                  border-left:4px solid #f97316;
                  padding:15px;
                  margin-top:25px;
                  border-radius:6px;
                "
              >
                <p style="margin:0;color:#9a3412;font-size:14px;">
                  <strong>Security Notice:</strong>
                  Please change your password after your first login and do not share your credentials with anyone.
                </p>
              </div>

              <p style="margin-top:30px;font-size:16px;color:#4b5563;line-height:1.6;">
                We are excited to have you on board and look forward to working together.
              </p>

              <p style="margin-top:30px;color:#111827;">
                Best Regards,<br />
                <strong>{{companyName}}</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="
                background:#f9fafb;
                padding:20px;
                text-align:center;
                color:#6b7280;
                font-size:13px;
              "
            >
              Need help? Contact us at
              <a href="mailto:{{supportEmail}}" style="color:#111827;">
                {{supportEmail}}
              </a>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

const onboardEmployee = async (fullName, email, password) => {
  const html = onboardingTemplate
    .replace("{{employeeName}}", fullName)
    .replace("{{email}}", email)
    .replace("{{password}}", password)
    .replace("{{loginUrl}}", "http://localhost:5173/login")
    .replace("{{companyName}}", "Lead Flow")
    .replace("{{supportEmail}}", "roshanjaiswal.bca@gmail.com");

  await transporter.sendMail({
    to: email,
    subject: "Welcome to Lead Flow - Your Login Credentials",
    html,
  });
};

export default onboardEmployee
