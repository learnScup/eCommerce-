const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
require('dotenv').config()

const PORT = process?.env?.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended:true }));




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
