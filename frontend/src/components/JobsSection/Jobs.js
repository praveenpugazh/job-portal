import React, { useContext, useEffect } from "react";
import JobItem from "./JobItem/JobItem";
import styles from "./Jobs.module.css";
import JobsContext from "../../context/jobContext/jobContext";
const Jobs = () => {
  const jobContext = useContext(JobsContext);
  const { jobs, getJobs } = jobContext;
  const { data, loading } = jobs;
  useEffect(() => {
    getJobs();
  }, []);
  console.log(data);
  return (
    <div className={styles.container}>
      <h2>All available Jobs </h2>
      <div className={styles.jobsContainer}>
        {!loading ? (
          data.map((item) => <JobItem key={item._id} data={item} />)
        ) : (
          <h3>Loading please wait</h3>
        )}
      </div>
    </div>
  );
};

export default Jobs;
