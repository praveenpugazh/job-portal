import Jobs from "../models/JobsModel.js";
import Users from "../models/UserModel.js";
export const getJobs = async (req, res) => {
  const data = await Jobs.find();
  res.json(data);
};

export const getSingleJob = async (req, res) => {
  const job = await Jobs.findById(req.params.id);
  res.json(job);
};

export const postJob = async (req, res) => {
  const { title, company, level, experience, description, skills } = req.body;
  const user = await Users.findById(req.user.id);
  if (user.isRecruiter !== true) {
    return res.status(401).json({ msg: "Access Denied" });
  }
  try {
    const newJob = new Jobs({
      title,
      company,
      level,
      experience,
      description,
      skills,
      user,
    });
    newJob.save();
    res.json(newJob);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editJob = async (req, res) => {
  const { title, company, level, experience, description, skills } = req.body;

  const newJob = {};
  if (title) newJob.title = title;
  if (company) newJob.company = company;
  if (level) newJob.level = level;
  if (experience) newJob.experience = experience;
  if (description) newJob.description = description;
  if (skills) newJob.skills = skills;
  const owner = await Jobs.findById(req.params.id);
  if (!owner) {
    return res.status(401).json({ msg: "Not Authorized" });
  }
  try {
    if (owner.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }
    const job = await Jobs.findByIdAndUpdate(
      req.params.id,
      { $set: newJob },
      { new: true }
    );
    res.json(job);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteJob = async (req, res) => {
  const owner = await Jobs.findById(req.params.id);
  if (!owner) {
    return res.status(401).json({ msg: "Not Authorized" });
  }
  try {
    if (owner.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }
    await Jobs.findByIdAndRemove(req.params.id);
    res.json({ msg: "Job removed" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

export const getPostedJobs = async (req, res) => {
  try {
    const owner = await Jobs.find({ user: req.user.id });
    res.json(owner);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const applyJobs = async (req, res) => {
  let user = await Users.findById(req.user.id);
  user.jobs = [...user.jobs, req.params.id];
  user.save();
  res.json({ user });
};

export const getAppliedJobs = async (req, res) => {
  let user = await Users.findById(req.user.id);
  res.json({ jobs: user.jobs });
};
