import { TextField } from "@mui/material";
import React, { useState } from "react";
import { isEmailValid, isPasswordValid, isPhoneValid } from "../../utils";
import Snackbar from "@mui/material/Snackbar";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import md5 from "md5";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const [snackbarData, setSnackbar] = useState({
    open: false,
    position: "top-right",
    message: "",
    vertical: "top",
    horizontal: "right",
  });

  const onSubmitHandler = async () => {
    const isValidEmail = isEmailValid(formData.email);
    // alert(isValidEmail + " " + formData.email);
    const isValidPhone = isPhoneValid(formData.phone);
    // alert(isValidPhone);
    const isValidPassword = isPasswordValid(formData.password);

    if (!isValidEmail) {
      setSnackbar((s) => ({
        ...s,
        open: true,
        message: "Invalid Email",
      }));
    } else if (!isValidPhone) {
      setSnackbar({
        ...snackbarData,
        open: true,
        message: "Invalid Phone",
      });
    } else if (!isValidPassword) {
      setSnackbar({
        ...snackbarData,
        open: true,
        message: "Password must be of 8 character",
      });
    } else if (formData.password !== formData.confirmPassword) {
      setSnackbar({
        ...snackbarData,
        open: true,
        message: "Password did not matched",
      });
    } else {
      const { email, password, phone } = formData;

      try {
        setLoading(true);
        const docRef = await addDoc(collection(db, "users"), {
          accounts: {
            email,
            phone,
            password: md5(password),
          },
        });
        setSnackbar({
          ...snackbarData,
          open: true,
          message: "Success",
        });

        setFormData({
          email: "",
          password: "",
          phone: "",
          confirmPassword: "",
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        setSnackbar({
          ...snackbarData,
          open: true,
          message: "Something went wrong",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return <div>Please wait loading</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
        gap: 20,
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: "white",
        padding: 50,
      }}
    >
      <div className="title">Register</div>
      {/* <form> */}
      <TextField
        id="filled-basic"
        label="Enter Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({
            ...formData,
            email: event.target.value,
          })
        }
        variant="outlined"
        style={{ width: "100%" }}
      />

      <TextField
        id="filled-basic"
        label="Enter Mobile Number"
        variant="outlined"
        onChange={(event) =>
          setFormData({
            ...formData,
            phone: event.target.value,
          })
        }
        style={{ width: "100%" }}
      />

      <TextField
        id="filled-basic"
        label="Enter Password"
        variant="outlined"
        onChange={(event) =>
          setFormData({
            ...formData,
            password: event.target.value,
          })
        }
        style={{ width: "100%" }}
      />

      <TextField
        id="filled-basic"
        label="Confirm Password"
        variant="outlined"
        onChange={(event) =>
          setFormData({
            ...formData,
            confirmPassword: event.target.value,
          })
        }
        style={{ width: "100%" }}
      />
      <div className="button" onClick={onSubmitHandler}>
        {" "}
        Create Account
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={snackbarData.open}
        onClose={() => {
          setSnackbar((s) => ({
            ...s,
            open: false,
          }));
        }}
        message={snackbarData.message}
        key={snackbarData.vertical + snackbarData.horizontal}
      />

      {/* </form> */}
    </div>
  );
};
