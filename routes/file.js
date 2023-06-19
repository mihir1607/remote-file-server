const express = require("express");
const router = express.Router();

const { saveFile } = require("../utilities/savefile");
const { retrieveFile } = require("../utilities/retrievefile");

router.get("/", (req, res, next) => {
    console.log("router working properly");
    res.send("File server accessed");
});

router.post("/uploadfile", async (req, res, next) => {
    console.log("upload file called");
    const fileProps = req.body;
    const { eventId, fileName, byteArray } = fileProps;
    await saveFile(eventId, fileName, byteArray);
    res.send("file saved");
});

router.get("/downloadfile", async (req, res, next) => {
    console.log("download file called");
    const fileName = 'test.txt';
    const filePath = `./${fileName}`;
    const byteArray = await retrieveFile(fileName);
    const postData = {
        fileName: fileName,
        byteArray: byteArray
    };
    res.send(JSON.stringify(postData));
});

module.exports = router;