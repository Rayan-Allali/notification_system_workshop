import FcmTokenService from '../services/fcmToken.service';
import { Request, Response } from 'express';
class FcmController {
  static async saveToken(req:Request, res:Response) {
    const { token } = req.body;
    if (token) {
      FcmTokenService.saveToken(token);
      res.status(200).send('Token saved successfully.');
    } else {
      res.status(400).send('Token is required.');
    }
  }

  static async sendToToken(req:Request, res:Response) {
    const { token, title, body } = req.body;
    if (token && title && body) {
      await FcmTokenService.sendToToken(token, title, body);
      res.status(200).send('Notification sent to token.');
    } else {
      res.status(400).send('Token, title, and body are required.');
    }
  }
}

export default FcmController;
