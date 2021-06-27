import mongoose from "mongoose";
import data from "./data/data.js";
import users from "./data/users.js";
import Jobs from "./models/JobsModel.js";
import Users from "./models/UserModel.js";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(
  process.env.MONGODB_URI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connection to MongoDB successful");
  }
);

const importData = async () => {
  try {
    await Jobs.deleteMany();
    await Users.deleteMany();
    const createdUsers = await Users.insertMany(users);
    const recruiter = createdUsers[0]._id;
    const sampleJobs = data.map((job) => {
      return { ...job, user: recruiter };
    });
    await Jobs.insertMany(sampleJobs);
    console.log("data imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Jobs.deleteMany();
    await Users.deleteMany();
    console.log("data destroyed");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
