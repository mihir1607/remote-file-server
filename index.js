const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

const fileRouter = require("./routes/file");
const port = process.env.PORT || 3000;

app.use('/', fileRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});