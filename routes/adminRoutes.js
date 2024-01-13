const express = require("express");
const { getAllUsersController } = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//POST ACCOUNT STATUS
router.post(authMiddleware);

module.exports = router;
