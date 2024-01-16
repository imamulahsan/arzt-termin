const express = require("express");
const {
  loginController,
  registerController,
  authController,
  appointmentController,
  appointmentAvailabilityController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//Appointment || POST
router.post("/appointmentbook", authMiddleware, appointmentController);

//Booking Avliability
router.post(
  "/appointment-availability",
  authMiddleware,
  appointmentAvailabilityController
);

module.exports = router;
