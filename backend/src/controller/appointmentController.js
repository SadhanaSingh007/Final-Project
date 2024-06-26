import Appointment from "../models/Appointment.js";
import BookingConfirm from "../models/BookingConfirm.js";

const appointmentController = {
  bookAppointment: async (req, res) => {
    try {

      const { user } = req.params;
      const { price, service, startTime } = req.body;
      const parsedStartTime = new Date(startTime);

      if (!service) {
        throw new error();
      }
    
      const newAppointment = new Appointment({
        service: service,
        startTime: parsedStartTime,
        price:price,
        user: req.body.user,
      });

      const appointments = await Appointment.find();
      const filteredAppointments = appointments.filter(
        (appointment) => user !== appointment.user.valueOf()
      );
      const times = filteredAppointments.map((time)=> time.startTime.toLocaleString())
      const filteredTimes = times.filter((time)=> parsedStartTime.toLocaleString() ===time)

      const bookingConfirms= await  BookingConfirm.find()
      const filteredBookingConfirm = bookingConfirms.filter(
        (bookingConfirm) => user !== bookingConfirm.user.valueOf()
      );
      
      const times2 = filteredBookingConfirm.map((time)=> time.startTime.toLocaleString())
      
      const filteredTimes2 = times2.filter((time)=> parsedStartTime.toLocaleString() ===time)
      
      if (filteredTimes.length != 0) {
        return res
          .status(400)
          .json({ message: "Appointment for the same time already exists." });
      }
     else if (filteredTimes2.length != 0) {
        return res
          .status(400)
          .json({ message: "Booking for the same time already exists." });
      }
      await newAppointment.save();
     

      res.status(201).json({
        message: "Appointment booked successfully",
        appointment: newAppointment,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteAllAppointments: async (req, res, next) => {
    try {
      await Appointment.deleteMany();
      res.json({ message: "All bookings deleted!" });
    } catch (error) {
      next({ status: 500, message: error.message });
    }
  },

  deleteSingleAppointment: async (req, res) => {
    try {
      const { service } = req.params;
      const deletedAppointment = await Appointment.findOneAndDelete({ service: service });
      if (!deletedAppointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      return res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
      console.error("Error deleting appointment:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  getUserAppointments: async (req, res) => {
    try {
      const { user } = req.params;

      const appointments = await Appointment.find();

      const filteredAppointments = appointments.filter(
        (appointment) => user === appointment.user.valueOf()
      );

      res.status(200).json(filteredAppointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllBookingHistory:async(req,res,next)=> {
    try {
      const {user}=req.params
      const appointments = await Appointment.find();
console.log(appointments.length);
      const allUserBookings = appointments.filter(
        (appointment) => user !== appointment.user.valueOf()
      );
      console.log("All User booking length", allUserBookings.length);
      res.send(allUserBookings)
    } catch (error) {
      next({ status: 500, message: error.message });
    }
  }

};





export default appointmentController;
