import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { SalesJPG } from "../../assets/png";
import { TextField } from "@mui/material";
export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formDescription}>
          <div className={styles.formDescriptionChild}>
            <div>
              <div className={styles.title}>Login</div>
              <div className={styles.subTitle}>
                Get access to your Orders, Wishlist and Recommendations
              </div>
            </div>
            <img
              src={SalesJPG}
              alt=""
              height={200}
              width={200}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.formData}>
          <div className={styles.formDataTopContainer}>
            <TextField
              id="filled-basic"
              label="Enter Email/Mobile Number"
              variant="filled"
              style={{ width: "100%" }}
            />
            <p className={styles.caption}>
              By continuing, you agree to Flipkart's{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => alert("Hello")}
              >
                Terms of Use
              </span>{" "}
              and{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => alert("Hello")}
              >
                Privacy Policy
              </span>
              .
            </p>
            <div className={`${styles.button} center`}> Request OTP</div>
          </div>
          <div
            className="center"
            // onMouseEnter={() => setIsMouseOver(true)}
            // onMouseOut={() => setIsMouseOver(false)}
            style={{ cursor: "pointer" }}
          >
            New to Flipkart? Create an account
          </div>
        </div>
      </div>
    </div>
  );
};
