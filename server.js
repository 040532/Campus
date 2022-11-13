const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const EmployeeRoute = require("./routes/Emproutes");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/testdb");
const db = mongoose.connection;
db.on("error", (err) => {
    console.log(err);
});
db.once("open", () => {
    console.log("Database Connection Established!");
});

app.use(morgan("dev"));
app.use(cookieParser('secret'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/employee", EmployeeRoute);

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
