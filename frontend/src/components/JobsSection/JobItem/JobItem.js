import React from "react";
import styles from "./JobItem.module.css";
const JobItem = ({ data }) => {
  return (
    <div className={styles.jobCard}>
      <div className={styles.firstLine}>
        <h3>
          {data.title} at <span>{data.company}</span>
        </h3>
        <p>
          Skills:
          {data.skills.map((skill) => (
            <span className={styles.skills}>{skill}, </span>
          ))}
        </p>
        <p>Posted: {data.date}</p>
      </div>
      <p>Seniority: {data.seniority}</p>
      <div className={styles.lastLine}>
        <p>{data.description}</p>
        <button className={styles.applyBtn}>Apply</button>
      </div>
    </div>
  );
};

export default JobItem;
