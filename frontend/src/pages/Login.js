import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import image from "../assets/login.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext/userContext";
const Login = () => {
  const userContext = useContext(UserContext);
  const { loginUser } = userContext;
  const history = useHistory();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputData);
    loginUser(inputData);
    setInputData({
      email: "",
      password: "",
    });
    history.push("/jobs");
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            value={inputData.email}
            onChange={changeHandler}
            className={styles.inputField}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={inputData.password}
            onChange={changeHandler}
            className={styles.inputField}
          />
          <br />
          <button className={styles.loginBtn}>Login</button>
        </form>
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
