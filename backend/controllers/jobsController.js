import data from "../data/data.js";

export const getJobs = (req, res) => {
  res.json(data);
};

export const getSingleJob = (req, res) => {
  const job = data.find((p) => p.id === +req.params.id);
  res.json(job);
};
