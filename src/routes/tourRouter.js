import express from "express";
import TourController from "../controllers/tourcontroller";
import Validator from "../middlewares/validator";
import verifyToken from"../middlewares/varifyToken";
 import verifyAccess from"../middlewares/verifyAccess";


const tourRouter=express.Router();
tourRouter.post(
    "/create",
    verifyToken,
    verifyAccess("admin"),
    Validator.newTourAccountRules(),
    Validator.validateInput,
    TourController.createTour
);
tourRouter.get("/alltours",TourController.getAllTours);
tourRouter.get("/:id",TourController.getOneTour);
tourRouter.delete("/:id",TourController.deleteOneTour);




export default tourRouter;

















