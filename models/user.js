import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String},
    username: { type: String, required: true },
    profilepic: {type: String},
    coverpic: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    razorpaysecret: {type: String},
    razorpayid: {type: String},
    
    });

// Only define the model if it doesn't already exist
export default mongoose.models.User || mongoose.model("User", UserSchema);