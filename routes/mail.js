const express = require("express");
const path = require("path");
//node mailer imports
const nodemailer = require("nodemailer");
const Mail = require("../models/mail");
const Faq = require("../models/faq");
const ejs = require("ejs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const router = express.Router();

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "mail.skillmate.ai",
  port: 587,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// GET route for the form
// @ts-ignore
router.get("/", function (req, res, next) {
  res.render("../views/index.ejs", { title: "Send Email" });
});
// @ts-ignore
router.get("/faq", function (req, res, next) {
  res.render("faq", { title: "Send FAQ" });
});

// POST route to send an email using EJS template
// @ts-ignore
router.post("/send/application", async function (req, res, next) {
  const { recipientEmail, fullname } = req.body;
  const senderEmail = `Skill Mate <career@skillmate.ai>`;
  const subject = `Congratulations ${fullname} 🎉 🎉!!! Thanks for registering with us!`;
  try {
    const templatePath = path.join(__dirname, "../views/applicationCong.ejs");
    const htmlContent = await ejs.renderFile(templatePath, { fullname });

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: `Hello ${fullname}, Welcome to Skill Mate!`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    // const mail = new Mail({
    //   senderEmail,
    //   recipientEmail,
    //   subject,
    // });
    // await mail.save();
    console.log(`Email sent ${recipientEmail}`);
    res.status(200).send(`Email sent ${recipientEmail}`);
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email.");
  }
});
router.post("/send/brands", async function (req, res, next) {
  const { recipientEmail, fullname } = req.body;
  const senderEmail = `Skill Mate <career@skillmate.ai>`;
  const subject = `Congratulations ${fullname} 🎉 🎉!!! Thanks for registering with us!`;
  try {
    const templatePath = path.join(__dirname, "../views/brandsCong.ejs");
    const htmlContent = await ejs.renderFile(templatePath, { fullname });

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: `Hello ${fullname}, Welcome to Skill Mate!`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    // const mail = new Mail({
    //   senderEmail,
    //   recipientEmail,
    //   subject,
    // });
    // await mail.save();
    console.log(`Email sent ${recipientEmail}`);
    res.status(200).send(`Email sent ${recipientEmail}`);
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email.");
  }
});
router.post("/send/job-approve", async function (req, res, next) {
  const { recipientEmail, fullname } = req.body;
  const senderEmail = `Skill Mate <career@skillmate.ai>`;
  const subject = `Congratulations ${fullname} 🎉 🎉!!! your job has been approved!`;
  try {
    const templatePath = path.join(__dirname, "../views/jobApprove.ejs");
    const htmlContent = await ejs.renderFile(templatePath, { fullname });

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: `Hello ${fullname}, Welcome to Skill Mate!`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Email sent ${recipientEmail}`);
    res.status(200).send(`Email sent ${recipientEmail}`);
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email.");
  }
});
router.post("/send/job-decline", async function (req, res, next) {
  const { recipientEmail, fullname, comment } = req.body;
  const senderEmail = `Skill Mate <career@skillmate.ai>`;
  const subject = `Feeling bad to say ${fullname}, that your job has been declined!`;
  try {
    const templatePath = path.join(__dirname, "../views/jobDecline.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      fullname,
      comment,
    });

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: `Hello ${fullname}, Welcome to Skill Mate!`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Email sent ${recipientEmail}`);
    res.status(200).send(`Email sent ${recipientEmail}`);
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email.");
  }
});
router.post("/send/job-applied", async function (req, res, next) {
  const { recipientEmail, fullname, brandName, jobTitle } = req.body;
  const senderEmail = `Skill Mate <career@skillmate.ai>`;
  const subject = `Feeling bad to say ${fullname}, that your job has been declined!`;
  try {
    const templatePath = path.join(__dirname, "../views/jobApplied.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      fullname,
      brandName, 
      jobTitle
    });

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: `Hello ${fullname}, Welcome to Skill Mate!`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Email sent ${recipientEmail}`);
    res.status(200).send(`Email sent ${recipientEmail}`);
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email.");
  }
});



router.post("/send/job-applied", async function (req, res, next) {
  const { recipientEmail, fullname, brandName, jobTitle } = req.body;
  const senderEmail = `Skill Mate <career@skillmate.ai>`;
  const subject = `Feeling bad to say ${fullname}, that your job has been declined!`;
  try {
    const templatePath = path.join(__dirname, "../views/jobApprove.ejs");
    const htmlContent = await ejs.renderFile(templatePath, { fullname },{comment},{brandName},{jobTitle});

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: `Hello ${fullname}, Welcome to Skill Mate!`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    
    console.log(`Email sent ${recipientEmail}`);
    res.status(200).send(`Email sent ${recipientEmail}`);
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email.");
  }
});

// POST route to handle dynamic email template using React components
// @ts-ignore
router.post("/send/faq", async (req, res, next) => {
  const { email, name, message } = req.body;
  console.log(message);
  if (!email) {
    return res.status(400).json({ message: "Missing email field" });
  }

  try {
    const templatePath1 = path.join(__dirname, "../views/questionRecieved.ejs");
    const templatePath2 = path.join(
      __dirname,
      "../views/questionSubmitted.ejs"
    );

    // Render the EJS templates to HTML
    const htmlContent1 = await ejs.renderFile(templatePath1, { name, message });
    const htmlContent2 = await ejs.renderFile(templatePath2, {
      name,
      email,
      message,
    });

    const mailOptions1 = {
      from: "Skill Mate <aashish@skillmate.ai>",
      to: email,
      subject: "Question Submitted",
      text: `Hello ${name}, welcome to Skill Mate!`,
      html: htmlContent1,
    };

    const mailOptions2 = {
      from: "Skill Mate <aashish@skillmate.ai>",
      to: "aashish@skillmate.ai",
      subject: "New Question",
      text: `A new question has been submitted by ${name} (${email})`,
      html: htmlContent2,
    };

    const info1 = await transporter.sendMail(mailOptions1);
    console.log("info1:", info1);
    const info2 = await transporter.sendMail(mailOptions2);

    const faq = new Faq({
      email,
      name,
      message,
    });
    await faq.save();

    res.status(200).json({ success: true, info1, info2 });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send emails" });
  }
});

module.exports = router;
