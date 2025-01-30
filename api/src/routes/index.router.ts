import { Application } from 'express'
import sseRouter from './sse.router'
import fcmRouter from './fcmToken.router'
export default function SetRouters(app: Application) {
  app.use('/sse', sseRouter)
  app.use('/fcm', fcmRouter)
}
