import admin from "../config/firebase-config";

class FcmTokenService {
  static token:string | null = null;

  static saveToken(token:string) {
    this.token = token;
    console.log('FCM Token saved:', token);
    this.sendNotification('Token saved', token);
  }

  static async sendNotification(title:string, body:string) {
    if (!this.token) {
      console.log('No FCM token found!');
      return;
    }

    const message = {
      notification: {
        title,
        body,
      },
      token: this.token,
    };

    try {
      await admin.messaging().send(message);
      console.log('Notification sent');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }

  static async sendToToken(token:string, title:string, body:string) {
    const message = {
      notification: {
        title,
        body,
      },
      token: token,
    };

    try {
      await admin.messaging().send(message);
      console.log('Notification sent to token');
    } catch (error) {
      console.error('Error sending notification to token:', error);
    }
  }

  static async sendToTopic(topic:string, title:string, body:string) {
    const message = {
      notification: {
        title,
        body,
      },
      topic: topic,
    };

    try {
      await admin.messaging().send(message);
      console.log('Notification sent to topic');
    } catch (error) {
      console.error('Error sending notification to topic:', error);
    }
  }

  static async subscribeToTopic(token:string, topic:string) {
    try {
      await admin.messaging().subscribeToTopic([token], topic);
      console.log(`Token subscribed to ${topic}`);
    } catch (error) {
      console.error('Error subscribing token to topic:', error);
    }
  }

  static async unsubscribeFromTopic(token:string, topic:string) {
    try {
      await admin.messaging().unsubscribeFromTopic([token], topic);
      console.log(`Token unsubscribed from ${topic}`);
    } catch (error) {
      console.error('Error unsubscribing token from topic:', error);
    }
  }
}

export default FcmTokenService;
