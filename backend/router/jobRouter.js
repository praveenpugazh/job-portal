import express from "express";
import {
  getJobs,
  getSingleJob,
  postJob,
  editJob,
  deleteJob,
  getPostedJobs,
} from "../controllers/jobsController.js";
const router = express.Router();

router.get("/", getJobs);
router.get("/postedjobs", getPostedJobs);
router.post("/", postJob);
router.patch("/:id", editJob);
router.get("/:id", getSingleJob);
router.delete("/:id", deleteJob);

export default router;
