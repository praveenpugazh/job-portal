import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext/userContext";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const userContext = useContext(UserContext);
  const { isAuthenticated, user, logoutUser } = userContext;
  const logoutHandler = () => {
    logoutUser();
  };
  return (
    <header className={styles.navbar}>
      <nav>
        <div className={styles.logo}>
          <Link to="/">
            <h2>
              Simply <span className={styles.logoColor}>Hire</span>
            </h2>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>Home</li>
            <Link to="/jobs">
              <li>Jobs</li>
            </Link>
            {user.isRecruiter === false ? (
              <li>Applied Jobs</li>
            ) : (
              <li>Post Job</li>
            )}
          </ul>
        </div>
        {!isAuthenticated ? (
          <div className={styles.buttons}>
            <Link to="/login">
              <button className={styles.loginBtn}>Login</button>
            </Link>
            <Link to="/signup">
              <button className={styles.signupBtn}>Signup</button>
            </Link>
          </div>
        ) : (
          <div className={styles.buttons}>
            <p>Welcome, {user.name}</p>
            <button className={styles.signupBtn} onClick={logoutHandler}>
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
