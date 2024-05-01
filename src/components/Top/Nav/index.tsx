"use client";
import React from "react";
import { navData } from "./data";
import styles from "../Top.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();

  console.log(path);
  return (
    <div className={styles.navData}>
      <ul>
        {navData.map((item: any) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={`${path === item.path && styles.activeLink}`}
            >
              {/* {item.text} */}
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
