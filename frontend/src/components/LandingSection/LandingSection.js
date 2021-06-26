import React from "react";
import styles from "./LandingSection.module.css";
import image from "../../assets/landing.svg";
import paypal from "../../assets/paypal.svg";
import google from "../../assets/google.svg";
import dropbox from "../../assets/dropbox.svg";
const LandingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h3>The Best place to grow your career </h3>
        <h3>in a exciting way</h3>
        <p>See your career sky rocket towards the top by finding </p>
        <p>the perfect job that suits you the best</p>
        <input type="text" placeholder="Enter your email" />
        <button className={styles.getStartedBtn}>Get Started</button>
        <div className={styles.imageContainer}>
          <img src={paypal} alt="" />
          <img src={google} alt="" />
          <img src={dropbox} alt="" />
          <p>Hire from us</p>
        </div>
      </div>
      <div className={styles.imageContent}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default LandingSection;
