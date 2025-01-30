import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOXf-tdWo4pgkt1XgzKM8h9RpPANKnBBI",
  authDomain: "notification-system-5f36c.firebaseapp.com",
  projectId: "notification-system-5f36c",
  storageBucket: "notification-system-5f36c.firebasestorage.app",
  messagingSenderId: "879052424863",
  appId: "1:879052424863:web:94dbfb0ad9335ced8044aa",
  measurementId: "G-0NWTL5DG7S"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const requestPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey: firebaseConfig.vapidKey });
      console.log("FCM Token:", token);
      await sendTokenToBackend(token); 
    } else {
      console.log("Permission denied");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};
onMessage(messaging, (payload) => {
  console.log("Foreground Notification:", payload);
  new Notification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});


const sendTokenToBackend = async (token) => {
  await fetch("http://localhost:8080/fcm/save-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
};

document.getElementById("fcm-permission").addEventListener("click", requestPermission);