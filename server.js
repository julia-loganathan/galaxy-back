require('dotenv').config()

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.listen(process.env.PORT || 4000, () => {
    console.log('Listening on port', process.env.PORT || 4000);
});