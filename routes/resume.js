const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");
const path = require("path");

const pipeline = promisify(require("stream").pipeline);

const router = express.Router();

const upload = multer();

router.post("/test", (req, res) => {
  res.send("");
});

// upload route
router.post("/upload", upload.single("file"), async (req, res) => {
  const { file } = req;
  // console.log(file.buffer);
  if (file.originalname.split(".").pop() !== "pdf") {
    res.status(400).json({
      message: "Invalid format",
    });
  } else {
    const filename = `${uuidv4()}-${file.originalname.split(".")[0]}`;
    try {
      await fs.promises.writeFile(
        `${__dirname}/../public/resume/${filename}.pdf`,
        file.buffer
      );
      res.send({
        message: "File uploaded successfully",
        url: `${filename}.pdf`,
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({
        message: "Error while uploading",
      });
    }
  }
});

// download route
router.get("/:file", (req, res) => {
  console.log(req.params.file);
  const address = path.join(__dirname, `../public/resume/${req.params.file}`);
  console.log(address);
  fs.access(address, fs.F_OK, (err) => {
    if (err) {
      res.status(404).json({
        message: "File not found",
      });
      return;
    }
    res.sendFile(address);
  });
});

// router.post("/profile", upload.single("file"), (req, res) => {
//   const { file } = req;
//   if (
//     file.detectedFileExtension != ".jpg" &&
//     file.detectedFileExtension != ".png"
//   ) {
//     res.status(400).json({
//       message: "Invalid format",
//     });
//   } else {
//     const filename = `${uuidv4()}${file.detectedFileExtension}`;

//     pipeline(
//       file.stream,
//       fs.createWriteStream(`${__dirname}/../public/profile/${filename}`)
//     )
//       .then(() => {
//         res.send({
//           message: "Profile image uploaded successfully",
//           url: `/host/profile/${filename}`,
//         });
//       })
//       .catch((err) => {
//         res.status(400).json({
//           message: "Error while uploading",
//         });
//       });
//   }
// });

module.exports = router;
