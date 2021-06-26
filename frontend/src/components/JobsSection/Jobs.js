import React, { useState } from "react";
import JobItem from "./JobItem/JobItem";
import styles from "./Jobs.module.css";
import { jobsData } from "../../data/data";
const Jobs = () => {
  const [user] = useState(true);
  return (
    <div className={styles.container}>
      <h2>All available Jobs </h2>
      <div className={styles.jobsContainer}>
        {user ? (
          jobsData.map((job) => <JobItem data={job} />)
        ) : (
          <h3>Please login to see jobs</h3>
        )}
      </div>
    </div>
  );
};

export default Jobs;
