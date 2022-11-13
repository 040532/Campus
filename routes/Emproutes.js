const express = require("express");
const router = express.Router();

const { index, show, store, update, authenticate, login, logout } = require("../controllers/EmpController");

router.get("/", index);
router.get("/show", authenticate, show);
router.post("/store", store);
router.post("/update", authenticate, update);
router.post("/login", login);
router.post("/logout", logout);


module.exports = router;
