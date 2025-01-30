import express from 'express';
import SetRouters from './routes/index.router';
import cors from 'cors'
import 'dotenv/config'; 
import { connectDb } from './config/db';
const port =`8080`
const app = express();
  
app.use(
    express.json({
      verify: (req: any, res, buf) => {
        req.rawBody = buf
      },
    })
  )
  app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'http://127.0.0.1:5500',
        'http://localhost:3001',
        'http://localhost:8081',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    })
  )

  connectDb()
  SetRouters(app)
  app.listen(port, () => {
   
    console.log(`Server is running on http://localhost:${port}`);
  });