import { Router } from 'express';
import asyncHandler from '../../middlewares/asynchandler';
import managerequestsController from '../../controllers/manageRequests';
import authMiddleware from '../../middlewares/auth.middleware';
import requestValidation from '../../middlewares/validations/manageRequests'


const managerequestsRoute = new Router();
const { checkToken} = authMiddleware;

managerequestsRoute.get('/', requestValidation, asyncHandler(managerequestsController.displaydirectRequests)).get('/approved',requestValidation, asyncHandler(managerequestsController.displaydirectapprovedRequests)).get('/pending',requestValidation, asyncHandler(managerequestsController.displaydirectpendingRequests)).put('/:id', requestValidation, asyncHandler(managerequestsController.makeDecision))

export default managerequestsRoute