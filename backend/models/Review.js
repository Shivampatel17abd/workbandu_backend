import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
},
  service: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Service" 
},
  rating: { 
    type: Number, 
    min: 1, 
    max: 5 
},
  comment: String
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
