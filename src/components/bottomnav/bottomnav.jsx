import styles from "./bottomnav.module.css";
import { MdHomeFilled, MdOutlineSearch, MdMap, MdPerson } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import Mainlogo_black from './img/bottomicon_black.svg?react';
import Mainlogo from './img/bottomicon.svg?react'

function Bottomnav() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const navItems = [
    {
      path: "/main",
      icon: (
        <div>
          <MdHomeFilled
            className={`${
              location.pathname === "/main" ? styles.click_emt : styles.emt1
            }`}
          />
        </div>
      ),
      label: location.pathname === "/main" ? "" : "홈",
      style: location.pathname === "/main" ? "" : styles.emt_font,
    },
    {
        path: "/search",
        icon: (
          <div>
            <MdOutlineSearch
              className={`${
                location.pathname === "/search" ? styles.click_emt : styles.emt1
              }`}
            />
          </div>
        ),
        label: location.pathname === "/search" ? "" : "검색",
        style: location.pathname === "/search" ? "" : styles.emt_font,
      },
      {
        path: "/allroot",
        icon: (
          <div>
            {['/main', '/search', '/like', '/profile'].includes(location.pathname) ? (
              <Mainlogo_black className={styles.click_emt} />
            ) : (
              <Mainlogo className={styles.click_emt} />
            )}
          </div>
        ),
      },
      {
        path: "/like",
        icon: (
          <div>
            <MdMap
              className={`${
                location.pathname === "/like" ? styles.click_emt : styles.emt1
              }`}
            />
          </div>
        ),
        label: location.pathname === "/like" ? "" : "좋아요",
        style: location.pathname === "/like" ? "" : styles.emt_font,
      },
      {
        path: "/profile",
        icon: (
          <div>
            <MdPerson
              className={`${
                location.pathname === "/profile" ? styles.click_emt : styles.emt1
              }`}
            />
          </div>
        ),
        label: location.pathname === "/profile" ? "" : "프로필",
        style: location.pathname === "/profile" ? "" : styles.emt_font,
      },
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map((item, index) => (
        <div key={index}>
          <NavLink to={item.path} className={styles.nav_link}>
            <div>{item.icon}</div>
            <div className={`${item.style} ${styles.additionalStyle}`}>
              {item.label}
            </div>
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default Bottomnav;
