import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  description: String,
  price: Number,
  category: String,
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
},
  rating: { 
    type: Number, 
    default: 0 
},
  reviews: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Review" 
}]
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);
