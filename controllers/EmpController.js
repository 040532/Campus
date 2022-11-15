const bcrypt = require("bcrypt");
const rfg = require("referral-code-generator");
const Employee = require("../models/Empmodels");

const authenticate = async (req, res, next) => {
    if (req.signedCookies.id) {
        req.body.user = await Employee.findById(req.signedCookies.id);
        next();
    } else {
        res.redirect("/login");
    }
};

const login = async (req, res, next) => {
    const emp = await Employee.findOne({ email: req.body.email });
    const verified = await bcrypt.compare(req.body.password, emp.password);
    if (verified) {
        res.cookie("id", emp._id.toString(), { httpOnly: true, signed: true });
        res.redirect("/dashboard");
    } else res.json({ err: "Incorrect username or password" });
};

const logout = (req, res, next) => {
    if (req.signedCookies.id) {
        res.clearCookie("id", { httpOnly: true, signed: true });
        res.redirect("/login");
        res.json({ msg: "Logged out successfully" });
    } else {
        res.json({ err: "Login first !" });
    }
};

const index = (req, res, next) => {
    Employee.find({})
        .then((response) => {
            res.json({
                response,
            });
        })
        .catch((error) => {
            res.json({
                message: " An error Occured!",
            });
        });
};
const show = (req, res, next) => {
    res.json(req.body.user);
};
const store = async (req, res, next) => {
    const { name, designated, email, phone, age, refto } = req.body;
    const reftoemp = await Employee.findOne({ refcode: refto });
    if (!reftoemp) {
        res.json({ err: "Incorrect referral code" });
    } else {
        reftoemp.n_referred++;
        await reftoemp.save();
    }

    const password = await bcrypt.hash(req.body.password, 10);
    const refcode = rfg.alphaNumeric("uppercase", 3, 1);
    const n_referred = 0;

    let employee = await Employee.create({ name, designated, email, phone, age, password, refcode, n_referred });
    console.log(employee);

    res.cookie("id", employee._id.toString(), { httpOnly: true, signed: true });
    res.redirect("/dashboard");
};

const update = (req, res, next) => {
    let employeeId = req.body.employeeId;
    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    };
    Employee.findByIdAndUpdate(req.signedCookies.id, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Employee updated Successfully!",
            });
        })
        .catch((error) => {
            res.json({
                message: "An error Occured!",
            });
        });
};

module.exports = {
    index,
    show,
    store,
    update,
    authenticate,
    login,
    logout,
};
