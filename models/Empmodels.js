const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const empSchema = new Schema(
    {
        name: {
            type: String,
        },
        designation: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        phone: {
            type: Number,
            length: 10,
        },
        age: {
            type: Number,
        },
        password: {
            type: String,
        },
    },
    { timestamps: true }
);

const Employee = mongoose.model("Employee", empSchema);
module.exports = Employee;
