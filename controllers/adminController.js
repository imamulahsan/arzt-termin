const userModel = require("../models/userModel");
const appointmentModel = require("../models/appointmentModel");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllAppointmentsController = async (req, res) => {
  try {
    const users = await appointmentModel.find({});
    res.status(200).send({
      success: true,
      message: "appointment data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching appointments",
      error,
    });
  }
};

module.exports = { getAllUsersController, getAllAppointmentsController };
