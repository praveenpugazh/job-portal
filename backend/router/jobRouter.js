import express from "express";
import {
  getJobs,
  getSingleJob,
  postJob,
  editJob,
  deleteJob,
  getPostedJobs,
  applyJobs,
  getAppliedJobs,
} from "../controllers/jobsController.js";
const router = express.Router();

router.get("/", getJobs);
router.get("/postedjobs", getPostedJobs);
router.post("/applyjob/:id", applyJobs);
router.get("/appliedjobs", getAppliedJobs);
router.post("/", postJob);
router.patch("/:id", editJob);
router.get("/:id", getSingleJob);
router.delete("/:id", deleteJob);

export default router;
