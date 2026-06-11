import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "roshanjaiswal.bca@gmail.com",
    pass: "mfwacaoezdnwrtxs",
  },
});

export default transporter