const express = require("express");

const app = express();
app.use(express.json());
require('dotenv').config();

app.listen(process.env.PORT,()=> {
    console.log(`server is listening ${process.env.PORT}`);
});