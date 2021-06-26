import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      require: true,
    },
    experience: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Jobs = mongoose.model("job", jobSchema);
export default Jobs;
