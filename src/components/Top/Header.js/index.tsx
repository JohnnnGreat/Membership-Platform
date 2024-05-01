import React from "react";
import Logo from "../Logo";
import Nav from "../Nav";
import Search from "../Search";
import styles from "../Top.module.scss";

const Header = () => {
  return (
    <div className={styles.headerNav}>
      {/* Navigation */}
      <Nav />
      <Search />
    </div>
  );
};

export default Header;
