import { Request, Response } from 'express';
import admin from '../config/firebase-config';
export class FireBaseMessaging{
    static async sendToDevice(req:Request, res:Response){
        const { token, title, body } = req.body;

        if (!token || !title || !body) {
          return res.status(400).send('Missing required fields: token, title, body');
        }
      
        const message = {
          token,
          notification: {
            title,
            body,
          },
        };
      
        try {
          const response = await admin.messaging().send(message);
          res.status(200).send(`Notification sent successfully: ${response}`);
        } catch (error) {
          console.error('Error sending notification:', error);
          res.status(500).send('Failed to send notification');
        }
    }
    static async sendToTopic(req:Request, res:Response) {
        const { topic, title, body } = req.body;
      
        if (!topic || !title || !body) {
          return res.status(400).send('Missing required fields: topic, title, body');
        }
      
        const message = {
          topic, 
          notification: {
            title,
            body,
          },
        };
      
        try {
          const response = await admin.messaging().send(message);
          res.status(200).send(`Notification sent successfully to topic ${topic}: ${response}`);
        } catch (error) {
          console.error('Error sending notification:', error);
          res.status(500).send('Failed to send notification');
        }
      }
}

