import mongoose from "mongoose";
import data from "./data/data.js";
import Jobs from "./models/JobsModel.js";
mongoose.connect(
  `mongodb+srv://praveen:praveen123@cluster0.lzx4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connection to MongoDB successful");
  }
);

const importData = async () => {
  try {
    await Jobs.deleteMany();
    const createdJobs = await Jobs.insertMany(data);
  } catch (error) {
    console.log(error);
  }
};
