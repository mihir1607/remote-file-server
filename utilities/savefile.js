const fs = require("fs");

const saveFile = async (eventId, fileName, byteArray) => {
    console.log("savefile called");
    const buffer = Buffer.from(byteArray);
    const folderName = `./${eventId}`;
    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
        const filePath = folderName + `/${fileName}`;
        fs.writeFileSync(filePath, buffer, (error) => {
            if (error) {
                console.error('Error while writing file:', error);
            } else {
                console.log('File saved successfully:', filePath);
            }
        });
    } catch (err) {
        console.error('Error:', err);
    };
};

module.exports = { saveFile };