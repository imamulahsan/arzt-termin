const express = require("express");
const {
  getAllUsersController,
  getAllAppointmentsController,
} = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || APPOINTMENTS
router.get("/getAllAppointments", authMiddleware, getAllAppointmentsController);

//POST ACCOUNT STATUS
router.post(authMiddleware);

module.exports = router;
