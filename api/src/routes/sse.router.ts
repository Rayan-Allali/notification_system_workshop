import { Router } from "express";
import { SseController } from "../controller/sse.controller";

const sseRouter = Router()

sseRouter.get('/',SseController.notifications)
export default sseRouter