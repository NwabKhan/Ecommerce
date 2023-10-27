import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  securityKey: {
    type: String,
    required: true,
  },
});

const Auth = mongoose.model("Auth", authSchema)

export default Auth
