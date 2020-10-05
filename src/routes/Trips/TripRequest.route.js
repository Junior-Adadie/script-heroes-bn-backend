import {Router} from 'express';
import tripController from '../../controllers/tripBooking.controller';
import asyncHandler from '../../middlewares/asynchandler';
import TripValidations from '../../middlewares/validations/tripValidations';
import authMiddleware from  '../../middlewares/auth.middleware';

const tripRouter = new Router();

tripRouter
.post('/oneway', authMiddleware.checkToken,TripValidations.oneway, asyncHandler(tripController.onewayTrip))
.delete('/oneway/:id', authMiddleware.checkToken, asyncHandler(tripController.deleteTrip))
.patch('/oneway/:id', authMiddleware.checkToken,TripValidations.oneway, asyncHandler(tripController.updateTrip))
.get('/oneway/:id', authMiddleware.checkToken, asyncHandler(tripController.getTrip))
.get('/oneway', authMiddleware.checkToken, asyncHandler(tripController.getTrips))
export default tripRouter;
