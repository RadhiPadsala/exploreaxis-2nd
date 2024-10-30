import { Router } from "express";
import FlightController from "../controllers/FlightController.js";
import { getHotels, getHotelById } from "../controllers/HotelController.js";
import AirportController from "../controllers/AirportController.js";
import AirlineController from "../controllers/AirlineController.js";

const router = Router();

router.get("/getflights", FlightController.GetAllFlights);
router.get("/getflights/:id", FlightController.GetSingleFlight);
router.post("/searchflights", FlightController.SearchFlights);
router.get("/airport", AirportController.getAllAirport);
router.get("/airline",AirlineController.getAllAirlines);

router.get("/gethotels", getHotels);
router.post("/hotelDetail", getHotelById);

export default router;
