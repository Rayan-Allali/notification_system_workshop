import express from 'express';
import FcmController from '../controller/fcmToken.controller';

const fcmRouter = express.Router();

fcmRouter.post('/save-token', FcmController.saveToken);
fcmRouter.post('/send-to-token', FcmController.sendToToken);


export default fcmRouter;
