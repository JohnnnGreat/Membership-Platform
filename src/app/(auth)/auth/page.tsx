"use client";

import React, { useEffect, useState } from "react";
import styles from "./Auth.module.scss";
import { register, login } from "@/utils/authActions/auth";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

import { handleGithubLogin } from "@/utils/authActions/auth";
import { auth } from "@/utils/auth";

const AuthPage = () => {
  const [stateRegister, formActionRegister] = useFormState(register, undefined);
  const [stateLogin, formActionLogin] = useFormState(login, undefined);
  const [openLogin, setOpenLogin] = useState(false);

  const router = useRouter();

  // const session = await auth();
  // console.log(session);

  useEffect(() => {
    setOpenLogin(true);
  }, [stateRegister?.success, router]);

  // useEffect(() => {
  //   stateLogin?.success && router.push("/");
  // }, [stateLogin?.success, router]);


  

  return (
    <div className={styles.Auth}>
      <div className={styles.AuthWrapper}>
        <div
          className={`${styles.FirstSection} ${openLogin && styles.OpenLogin}`}
        >
          <div className={`${openLogin && styles.hideInf}`}>
            {" "}
            <h1 className={styles.HeaderText}>Already have an account?</h1>
            <button
              onClick={() => {
                setOpenLogin(true);
              }}
            >
              Login
            </button>
          </div>

          <div
            className={`${styles.FormLoginContainer} ${
              openLogin && styles.ShowLogin
            }`}
          >
            <h1>Login</h1>
            <form action={handleGithubLogin}>
              <button>Login with Github</button>
            </form>

            <form className={styles.Form} action={formActionLogin}>
              <input
                type="text"
                placeholder="Your email Address"
                name="email"
              />

              <input
                type="password"
                placeholder="Enter Password"
                name="password"
              />

              <button>Register</button>
              {stateLogin?.error}
            </form>
          </div>
        </div>
        <div
          className={`${styles.SecondSection} ${
            openLogin && styles.changeHeight
          }`}
        >
          <div className={`${styles.hideReInf} ${openLogin && styles.showInf}`}>
            {" "}
            <h1 className={styles.HeaderText}>Yet to Have An Account?</h1>
            <button
              onClick={() => {
                setOpenLogin(false);
              }}
            >
              Register
            </button>
          </div>
          <div
            className={`${styles.FormContainer} ${
              openLogin && styles.CloseReg
            }`}
          >
            <h1>Register</h1>
            <form className={styles.Form} action={formActionRegister}>
              <input
                type="text"
                placeholder="Your email Address"
                name="email"
              />
              <input type="text" placeholder="Your Full Name" name="name" />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />

              <button>Register</button>
              {stateRegister?.error}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
