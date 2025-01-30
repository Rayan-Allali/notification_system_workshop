import mongoose from 'mongoose';


  const notificationSchema = new mongoose.Schema({
    concernedUsers: {type: [{userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },seen:{type:Boolean,default:false}}] },
    title: { type: String, required: true },
    body: { type: String, required: true },
    icon: { type: String },
    date:{ type: Date, default: Date.now },
    type:{ type: String, required: true },
  });
  
const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;