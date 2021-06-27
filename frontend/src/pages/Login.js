import React from "react";
import styles from "./Login.module.css";
import image from "../assets/login.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <input type="text" placeholder="Email" className={styles.inputField} />
        <br />
        <input
          type="password"
          placeholder="Password"
          className={styles.inputField}
        />
        <br />
        <button className={styles.loginBtn}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Login;
