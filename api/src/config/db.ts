import mongoose from 'mongoose'

export const db =mongoose
  .connect(process.env.MONGODB_URI!, { dbName: process.env.MONGODB_NAME })
  .then(async () => {
    console.log(`🗄️  ==> '${process.env.MONGODB_NAME}' DB is Connected.`)
  })
  .catch((err) => {
    console.log(err)
  })

export async function connectDb() {
  await db
}