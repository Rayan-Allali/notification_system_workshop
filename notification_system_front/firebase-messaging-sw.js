importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
const firebaseConfig = {
  apiKey: "AIzaSyCOXf-tdWo4pgkt1XgzKM8h9RpPANKnBBI",
  authDomain: "notification-system-5f36c.firebaseapp.com",
  projectId: "notification-system-5f36c",
  storageBucket: "notification-system-5f36c.firebasestorage.app",
  messagingSenderId: "879052424863",
  appId: "1:879052424863:web:94dbfb0ad9335ced8044aa",
  measurementId: "G-0NWTL5DG7S"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message: ', payload);
  const notificationTitle = 'Background Notification';
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
