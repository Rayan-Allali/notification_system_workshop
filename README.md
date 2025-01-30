# Workshop: Mastering System Notifications

This workshop covers the fundamentals of system notifications, including different types of notifications, foreground vs. background handling, and various methods for implementing notifications. We’ll also dive into **Firebase Cloud Messaging (FCM)** and how to design a robust notification model.

---

## Table of Contents
1. [Introduction to Notifications](#introduction-to-notifications)
2. [Foreground vs. Background Notifications](#foreground-vs-background-notifications)
3. [Different Methods for Handling Notifications](#different-methods-for-handling-notifications)
4. [Firebase Cloud Messaging (FCM)](#firebase-cloud-messaging-fcm)
5. [Resources](#resources)

---

## 1. Introduction to Notifications

### What Are Notifications?
Notifications are messages or alerts sent to users to inform them about important events, updates, or actions. They can be delivered through various channels, such as:
- **Email**
- **SMS**
- **Push Notifications**
- **In-App Notifications**
- **Web Notifications**

### Why Are Notifications Important?
- **Engagement**: Keep users informed and engaged with your app.
- **Retention**: Remind users to return to your app.
- **Real-Time Updates**: Provide timely information (e.g., chat messages, breaking news).

---

## 2. Foreground vs. Background Notifications

### Foreground Notifications
- **When the app is open and active**.
- Requires manual handling (e.g., displaying a UI alert or updating the app’s state).
- Example: Polling every 5 minutes for updates.

### Background Notifications
- **When the app is closed or running in the background**.
- Handled by the system (e.g., notification tray).
- Example: Firebase Messaging handles background push notifications automatically.

---

## 3. Different Methods for Handling Notifications

### A. Polling (Refetching Every 5 Minutes)
- **How it works**: The client repeatedly asks the server for updates.
- **Best for**: Cases where real-time updates aren’t required.
- **Limitations**: Inefficient and high latency.

### B. WebSockets
- **How it works**: A two-way communication channel between the client and server.
- **Best for**: Chat applications and instant updates.
- **Limitations**: Requires an active connection.

### C. Server-Sent Events (SSE)
- **How it works**: One-way communication from the server to the client.
- **Best for**: Real-time dashboards, stock updates, and notifications.
- **Limitations**: No offline support.

---

## 4. Firebase Cloud Messaging (FCM)

### What is FCM?
A cross-platform messaging solution for **Android**, **iOS**, and **web**. It allows you to send notifications and data messages to users, even when the app is in the background or closed.

### How Does FCM Work?
1. **Client-Side**: The app registers with FCM and receives a unique **FCM token**.
2. **Server-Side**: Your server sends messages to FCM using the **FCM HTTP v1 API** or **Admin SDK**.
3. **Client Handling**: The system displays notifications or passes data to the app.

### Types of FCM Messages
1. **Notification Messages**: Displayed automatically by the system.
2. **Data Messages**: Handled by the app, even in the foreground.
3. **Combination Messages**: Include both `notification` and `data` payloads.

### Sending Notifications with FCM
1. **To a Single Device**: Use the device’s FCM token.
2. **To a Topic**: Send messages to all devices subscribed to a topic.
3. **To a Device Group**: Group multiple devices under a single notification key.
4. **Conditional Targeting**: Send messages based on conditions (e.g., `TopicA` AND `TopicB`).

---


## 7. Resources

- [Firebase Cloud Messaging Documentation](https://firebase.google.com/docs/cloud-messaging)
- [Web Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
