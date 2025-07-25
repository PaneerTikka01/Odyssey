// models/User.ts
import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = models.User || mongoose.model("User", userSchema);
export default User;
