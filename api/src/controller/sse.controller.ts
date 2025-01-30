import { Request, Response } from 'express';
export class SseController{
    static notifications(req:Request, res:Response){
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();
        let count = 0;
        const interval = setInterval(() => {
            count++;
            const data = `notification-${count}`;
            res.write(`data: ${data}\n\n`);
        }, 1000);
        req.on('close', () => {
            clearInterval(interval);
        });
    }
}