import EventEmitter from 'node:events'

const NotificationEmitter = new EventEmitter()

//exemple of event emitter
// NotificationEmitter.on('newOrder', async (notif:any) => {
//   try {
//     const proccessNotifs = await processUserNotificationsWithTranslition(notif, 'new')
//     if (!(proccessNotifs instanceof ErrorResponseC)) {
//       await sendingNotifToAllPlatformsWithTranslition(proccessNotifs, notif)
//       await sendingNotifToAllemailsWithTranslition(proccessNotifs, notif)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// })

// NotificationEmitter.on('default', async (notif: NotificationD) => {
//   try {
//     const proccessNotifs = await processUserNotificationsWithTranslition(notif, 'default')
//     if (!(proccessNotifs instanceof ErrorResponseC)) {
//       await sendingNotifToAllPlatformsWithTranslition(proccessNotifs, notif)
//       await sendingNotifToAllemailsWithTranslition(proccessNotifs, notif)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// })

// NotificationEmitter.on('error', async (notif: NotificationD) => {
//   try {
//     const proccessNotifs = await processUserNotificationsWithTranslition(notif, 'default')
//     if (!(proccessNotifs instanceof ErrorResponseC)) {
//       await sendingNotifToAllPlatformsWithTranslition(proccessNotifs, notif)
//       await sendingNotifToAllemailsWithTranslition(proccessNotifs, notif)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// })

// NotificationEmitter.on('subscription', async (notif: NotificationD) => {
//   try {
//     const proccessNotifs = await processUserNotificationsWithTranslition(notif, 'default')
//     if (!(proccessNotifs instanceof ErrorResponseC)) {
//       await sendingNotifToAllPlatformsWithTranslition(proccessNotifs, notif)
//       await sendingNotifToAllemailsWithTranslition(proccessNotifs, notif)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// })

// NotificationEmitter.on('delivery', async (notif: NotificationD) => {
//   try {
//     const proccessNotifs = await processUserNotificationsWithTranslition(notif, 'orderStalled')
//     if (!(proccessNotifs instanceof ErrorResponseC)) {
//       await sendingNotifToAllPlatformsWithTranslition(proccessNotifs, notif)
//       await sendingNotifToAllemailsWithTranslition(proccessNotifs, notif)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// })

// NotificationEmitter.on('updateOrder', async (notif: NotificationD) => {
//   try {
//     const proccessNotifs = await processUserNotificationsWithTranslition(notif, 'update')
//     if (!(proccessNotifs instanceof ErrorResponseC)) {
//       await sendingNotifToAllPlatformsWithTranslition(proccessNotifs, notif)
//       await sendingNotifToAllemailsWithTranslition(proccessNotifs, notif)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// })

// NotificationEmitter.on('call', async (notif: NotificationD) => {
//   try {
//     const proccessNotifs = await processUserNotificationsWithTranslition(notif, 'default')

//     console.log(`proccessNotifs `, proccessNotifs)
//     if (!(proccessNotifs instanceof ErrorResponseC)) {
//       await sendingNotifToAllPlatformsWithTranslition(proccessNotifs, notif)
//     }
//   } catch (err) {
//     console.error(err)
//   }
// })
export default NotificationEmitter