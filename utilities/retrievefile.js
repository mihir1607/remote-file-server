const fs = require("fs");

const retrieveFile = async (filePath) => {
    console.log("retrieveFile called");
    const fileData = fs.readFileSync(filePath);
    const byteArray = Array.from(fileData);
    return byteArray;
};

module.exports = { retrieveFile };