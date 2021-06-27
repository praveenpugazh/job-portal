import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import image from "../assets/login.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext/userContext";
const Login = () => {
  const userContext = useContext(UserContext);
  const { signupUser } = userContext;
  const history = useHistory();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });
  const changeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: inputData.name,
      email: inputData.email,
      password: inputData.password,
      isRecruiter: inputData.type === "employee" ? false : true,
    };
    console.log(userData);
    signupUser(userData);
    setInputData({
      name: "",
      email: "",
      password: "",
      type: "",
    });
    history.push("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Signup</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={inputData.name}
            onChange={changeHandler}
            className={styles.inputField}
          />
          <br />
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
          <input
            type="radio"
            value="employee"
            name="type"
            checked={inputData.type === "employee"}
            onChange={changeHandler}
          />
          <label>Employee</label>
          <input
            type="radio"
            value="recruiter"
            name="type"
            checked={inputData.type === "recruiter"}
            onChange={changeHandler}
          />
          <label>Recruiter</label>
          <br />
          <button className={styles.loginBtn}>Signup</button>
          <p>
            Have an account already? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Login;
