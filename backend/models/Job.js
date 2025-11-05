import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  company: { 
    type: String, 
},
  description: String,
  requirements: [String],
  salaryRange: String,
  location: String,
  jobType: { 
    type: String, 
    enum: ["full-time", "part-time", "remote", "internship"], 
    default: "full-time" 
},
  postedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
}
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
