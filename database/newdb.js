const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mihir@123"
});

const createDB = async (dbname, tableName) => {

    con.connect((err) => {
        if (err) throw err;
        console.log("createDB called");
        // const sqlQuery = "CREATE DATABASE ?";
        const createDBQuery = `CREATE DATABASE IF NOT EXISTS ${dbname}`;
        con.query(createDBQuery, (err, result) => {
            if (err) throw err;
            console.log(`Database ${dbname} created`);
        });
        con.query(`USE ${dbname}`, (err, result) => {
            if (err) throw err;
            console.log(`Using database ${dbname}`);
        });
        const createTableQuery = `CREATE TABLE IF NOT EXISTS cfrooms (EVENTID VARCHAR(255) NOT NULL PRIMARY KEY, PASSKEY VARCHAR(255) NOT NULL, IS_ACTIVE BOOLEAN NOT NULL DEFAULT 0, FILELOCATION VARCHAR(255))`;
        con.query(createTableQuery, (err, result) => {
            if (err) throw err;
            console.log(`Table ${tableName} created`);
        });
    });
};

module.exports = { createDB };