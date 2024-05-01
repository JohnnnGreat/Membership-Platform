import React from "react";
import styles from "../Top.module.scss";
import { usePathname } from "next/navigation";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <h1>
        M-<span>Space</span>
      </h1>
    </div>
  );
};

export default Logo;
