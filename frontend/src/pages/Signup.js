import React from "react";
import styles from "./Login.module.css";
import image from "../assets/login.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Signup</h2>
        <input type="text" placeholder="Name" />
        <br />
        <input type="text" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="password" placeholder="Confirm Password" />
        <br />
        <input type="radio" />
        <label>Employee</label>
        <input type="radio" />
        <label>Recruiter</label>
        <button className={styles.loginBtn}>Signup</button>
        <p>
          Have an account already? <Link to="/login">Login</Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Login;
