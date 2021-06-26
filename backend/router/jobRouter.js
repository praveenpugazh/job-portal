import express from "express";
import { getJobs, getSingleJob } from "../controllers/jobsController.js";
const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getSingleJob);

export default router;
