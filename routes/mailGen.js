// Import necessary modules
const express = require("express");
//node mailer imports
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const Survey = require("../models/survey");
const path = require("path");
const ejs = require("ejs");

const router = express.Router();

// Configure the mail transporter (using Gmail as an example)
const transporter = nodemailer.createTransport({
  host: "mail.skillmate.ai",
  port: 587,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD, // Your email password or App password
  },
});

// Configure Mailgen
const mailGenerator = new Mailgen({
  theme: "default", // You can use 'default' or 'salted' themes
  product: {
    name: "SKILLMATETECH SOLUTIONS LLP",
    link: "https://skillmate.ai", // Your company or product's website
    logo: "https://stage.skillmate.ai/svg/logo.svg", // Optional company logo
  },
});
router.post("/send/looking", async function (req, res, next) {
  const { recipientEmail, fullname, service } = req.body;

  const senderEmail = `Skill Mate <career@skillmate.ai>`;
  const subject = `Thank you for participating the survey!`;

  try {
    const templatePath = path.join(__dirname, "../views/surveyParticipate.ejs");

    // Generate email content for applicant using Mailgen
    // const emailApplicant = {
    //   body: {
    //     name: fullname,
    //     intro: `You have shown the interest in ${service}.`,
    //     action: {
    //       instructions: `We have recieved your mail and we will keep you updated`,
    //       button: {
    //         color: '#22BC66', // Optional button color
    //         text: 'Visit Skill Mate',
    //         link: 'https://skillmate.ai/'
    //       }
    //     },
    //     outro: 'Looking forward to connecting with you soon!'
    //   }
    // };
    const htmlContent1 = await ejs.renderFile(templatePath, {
      fullname,
      service,
    });

    // Generate email content for admin using Mailgen
    const emailAdmin = {
      body: {
        name: "Admin",
        intro: `${fullname} has participated for ${service}.`,
        table: {
          data: [
            {
              "Particapte Name": fullname,
              service: service,
              "Recipient Email": recipientEmail,
            },
          ],
          columns: {
            // Optionally customize the table column widths
            customWidth: {
              "Applicant Name": "20%",
              "Job Title": "20%",
            },
          },
        },
        outro: "Keep him/her updated",
      },
    };

    // Generate HTML from Mailgen for both emails
    // const htmlContentApplicant = mailGenerator.generate(emailApplicant);
    const htmlContentAdmin = mailGenerator.generate(emailAdmin);

    // Fallback plain-text versions
    // const textContentApplicant = mailGenerator.generatePlaintext(emailApplicant);
    const textContentAdmin = mailGenerator.generatePlaintext(emailAdmin);

    // Email to applicant
    const mailOptionsApplicant = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: `Hello ${fullname}, welcome to Skill Mate!`,
      html: htmlContent1,
    };

    // Email to admin
    const mailOptionsAdmin = {
      from: "Skill Mate <career@skillmate.ai>",
      to: "career@skillmate.ai",
      subject: "New Participation in Survey",
      text: textContentAdmin,
      html: htmlContentAdmin,
    };

    // Send emails
    await transporter.sendMail(mailOptionsApplicant);
    await transporter.sendMail(mailOptionsAdmin);

    const survey = new Survey({
      email: recipientEmail,
      name: fullname,
      service,
    });
    await survey.save();

    console.log(`Email sent to ${recipientEmail}`);
    res.status(200).send(`Email sent for job applied to ${recipientEmail}`);
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email.");
  }
});
router.post("/send/notnow", async function (req, res, next) {
  const { recipientEmail, fullname, feedback } = req.body;
  const senderEmail = `Skill Mate <career@skillmate.ai>`;
  const subject = `Thank you for participating the survey!`;

  try {
    const templatePath = path.join(__dirname, "../views/surveyNotnow.ejs");
    const htmlContent1 = await ejs.renderFile(templatePath, {
      fullname,
      feedback,
    });

    // Generate email content for admin using Mailgen
    const emailAdmin = {
      body: {
        name: "Admin",
        intro: `${fullname} has participated and shown no interest with describing ${feedback}.`,
        table: {
          data: [
            {
              "Particapte Name": fullname,
              feedback: feedback,
              "Recipient Email": recipientEmail,
            },
          ],
          columns: {
            // Optionally customize the table column widths
            customWidth: {
              "Applicant Name": "20%",
              "Job Title": "20%",
            },
          },
        },
        outro: "Keep him/her updated",
      },
    };

    // Generate HTML from Mailgen for both emails
    // const htmlContentApplicant = mailGenerator.generate(emailApplicant);
    const htmlContentAdmin = mailGenerator.generate(emailAdmin);

    // Fallback plain-text versions
    // const textContentApplicant = mailGenerator.generatePlaintext(emailApplicant);
    const textContentAdmin = mailGenerator.generatePlaintext(emailAdmin);

    // Email to applicant
    const mailOptionsApplicant = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      text: `Hello ${fullname}, welcome to Skill Mate!`,
      html: htmlContent1,
    };

    // Email to admin
    const mailOptionsAdmin = {
      from: "Skill Mate <career@skillmate.ai>",
      to: "career@skillmate.ai",
      subject: "New Participation in Survey",
      text: textContentAdmin,
      html: htmlContentAdmin,
    };

    // Send emails
    await transporter.sendMail(mailOptionsApplicant);
    await transporter.sendMail(mailOptionsAdmin);

    const survey = new Survey({
      email: recipientEmail,
      name: fullname,
      service: feedback,
    });
    await survey.save();

    console.log(`Email sent to ${recipientEmail}`);
    res.status(200).send(`Email sent for job applied to ${recipientEmail}`);
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email.");
  }
});

module.exports = router;
