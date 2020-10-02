import { Router } from 'express';
import accomodationController from '../../controllers/accomodation';
import roomController from '../../controllers/rooms';
import asyncHandler from '../../middlewares/asynchandler';
import accomodationValidation from '../../middlewares/validations/accomodation';
import authMiddleware from '../../middlewares/auth.middleware';
const accomodationRoute = new Router();
const { checkToken, checkAdmin } = authMiddleware;

accomodationRoute
  .post(
    '/',
    //[checkToken, checkAdmin],
    [checkToken],
    accomodationValidation,
    asyncHandler(accomodationController.addAccomodation)
  )
  .get('/', [checkToken], asyncHandler(accomodationController.getAccomodations))
  .get(
    '/:id',
    //[checkToken, checkAdmin],
    [checkToken],
    asyncHandler(accomodationController.getAnAccommodation)
  )
  .delete(
    '/:id',
    //[checkToken, checkAdmin],
    [checkToken],
    asyncHandler(accomodationController.deleteAccomodation)
  )
  .put(
    '/:id',
    //[checkToken, checkAdmin],
    [checkToken],
    asyncHandler(accomodationController.updateAccomodation)
  )
  .post(
    '/:id/rooms',
    //[checkToken, checkAdmin],
    [checkToken],
    asyncHandler(roomController.makeRooms)
  )
  .get(
    '/:id/rooms',
    //[checkToken, checkAdmin],
    [checkToken],
    asyncHandler(roomController.getRooms)
  )
  .delete(
    '/:id/rooms',
    //[checkToken, checkAdmin],
    [checkToken],
    asyncHandler(roomController.deleteRooms)
  );

export default accomodationRoute;
