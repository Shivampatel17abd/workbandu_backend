import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
  role: { 
    type: String, 
    enum: ["jobseeker", "employer", "freelancer"], 
    required: true 
},
  bio: String,
  skills: [String],
  location: String,
  profilePic: String
}, { timestamps: true });

export default mongoose.model("User", userSchema);
