import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
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
            <li>Support</li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <Link to="/login">
            <button className={styles.loginBtn}>Login</button>
          </Link>
          <Link to="/signup">
            <button className={styles.signupBtn}>Signup</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
