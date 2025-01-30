import * as admin from 'firebase-admin'
import 'dotenv/config'; 
const serviceAccount = {
  clientEmail: process.env.FIREBASE_EMAIL,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key: process.env.FIREBASE_PRIVATEKEY,
}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export default admin
