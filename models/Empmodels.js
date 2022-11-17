const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const empSchema = new Schema(
    {
        name: {
            type: String,
        },
        college: {
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
        password: {
            type: String,
        },
        refCode: {
            type: String,
        },
        nReferred: {
            type: Number,
        },
    },
    { timestamps: true }
);

const Employee = mongoose.model("Employee", empSchema);
module.exports = Employee;
