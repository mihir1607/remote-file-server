const express = require("express");
const router = express.Router();

const { saveFile } = require("../utilities/savefile");
const { retrieveFile } = require("../utilities/retrievefile");
const { createDB } = require("../database/newdb");

const { insertEvents, authorizeEvent } = require("../database/cfrooms");

router.get("/", (req, res, next) => {
    console.log("router working properly");
    res.send("File server accessed");
});

router.get("/downloadfile", async (req, res, next) => {
    console.log("download file called");
    const fileName = 'video.mp4';
    const filePath = `./${fileName}`;
    const byteArray = await retrieveFile(filePath);
    const postData = {
        fileName: fileName,
        byteArray: byteArray
    };
    res.send(JSON.stringify(postData));
});

router.post("/uploadfile", async (req, res, next) => {
    console.log("upload file called");
    const fileProps = req.body;
    const { eventId, fileName, byteArray } = fileProps;
    await saveFile(eventId, fileName, byteArray);
    res.send("file saved");
});

router.post("/createdb", async (req, res, next) => {
    console.log("create db called");
    // const dbName = 'webvr';
    // const tableName = 'cfrooms';
    // await createDB(dbName, tableName);
    await insertEvents();
    res.send("database created");
});

module.exports = router;