import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isRecruiter: {
      type: Boolean,
      required: [true, "Enter is recruiter"],
    },
    jobs: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "job",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("user", userSchema);
export default Users;
