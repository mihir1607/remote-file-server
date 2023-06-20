const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mihir@123",
    database: "webvr",
});

// dummy function to add new records
const insertEvents = async () => {
    con.connect((err) => {
        if (err) throw err;
        console.log('inserting dummy events');
        var insertQuery = "INSERT INTO cfrooms (EVENTID, PASSKEY, IS_ACTIVE, FILELOCATION) VALUES (";
        var values = [{eventId: '123', passKey: "123", isActive: false, fileLocation: '123'},
        {eventId: '456', passKey: 'hello456', isActive: true, fileLocation: '456'},
        {eventId: '789', passKey: 'hello789', isActive: false, fileLocation: '789'}
        ];
        for (let i = 0; i < values.length; i++) {
            // const q = insertQuery + `(${values[i].eventId}, ${values[i].passKey}, ${values[i].isActive}, ${values[i].fileLocation})`;
            const q = insertQuery + values[i].eventId + ", " + values[i].passKey + ", " + values[i].isActive + ", " + values[i].fileLocation + ")";
            con.query(q, (err, result) => {
                if (err) throw err;
                console.log('record inserted');
            });
        }
    });
};

const authorizeEvent = async (eventId, passKey) => {
    con.connect((err) => {
        if (err) throw err;
        console.log('checking for event auth');
        const findEvent = `SELECT * FROM cfrooms WHERE EVENTID = ${eventId}`;
    });
};

module.exports = { insertEvents, authorizeEvent };