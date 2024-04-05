import Menu from "../menu/Menu";
import styles from "./layout.module.scss";
import { FaHeart } from "react-icons/fa6";
import "../../styles/lightTheme.scss";
import { IoGridOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

import { useState } from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  const [light, setLight] = useState(false);
  return (
    <div className={light ? "mainApp light " : "mainApp"}>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <img src="/logo.svg" alt="logo" />
            <h1>soheilAdmin</h1>
          </div>
        </Link>
        <div className={styles.icons}>
          {/* <img src="/search.svg" alt="search" className="icon" /> */}
          {/* <img src="/app.svg" alt="app" className="icon" /> */}
          <MdOutlineDarkMode
            onClick={() => (light ? setLight(false) : setLight(true))}
          />
          <IoGridOutline />
          {/* <img src="/expand.svg" alt="expand" className="icon" /> */}
          <div className={styles.notification}>
            {/* <img src="/notifications.svg" alt="" className="icon" /> */}
            <IoMdNotificationsOutline />
            <span>1</span>
          </div>
          <div className={styles.user}>
            <img src="/user.jpg" alt="" />
            <span>Soheil</span>
          </div>
          <CiSettings />
          {/* <img src="/setting.svg" className="icon" alt="" /> */}
        </div>
      </header>
      <div className={styles.main}>
        <Menu />
        <div className={styles.contentContainer}>{children}</div>
      </div>
      <footer>
        Developed by Soheil
        <span>
          <FaHeart />
        </span>
      </footer>
    </div>
  );
};

export default Layout;
