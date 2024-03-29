import { Margin } from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";
import { CSSProperties } from "react";

interface StyleType {
  [key: string]: CSSProperties;
}

export const HeaderStyle: StyleType = {
  container: {
    height: "56px",
    backgroundColor: "#2874f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  child1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 75,
    marginLeft: 185,
    alignContent: "center",
    flexWrap: "wrap",
  },

  logo: {
    height: 20,
    width: 75,
    objectFit: "contain",
    marginBottom: -1,
  },

  childSec: {
    display: "flex",
    fontStyle: "italic",
    fontSize: "0.7rem",
    height: 16,
    width: "4.5rem",
    fontWeight: 500,
    alignItems: "center",
    justifyContent: "center",
  },

  anc1: {
    color: "#f0f0f0",
    textDecoration: "none",
    marginTop: -1,
  },

  anc2: {
    color: "#f9e107",
    paddingLeft: 2,
  },

  logoSec: {
    width: 10,
  },

  child2: {
    display: "flex",
    // background: "white",
    padding: 5,
    flex: 1,
    marginRight: -20,
    marginLeft: 10,
    height: 35,
  },

  child2First: {
    width: "80%",
    height: 35,
    border: "none",
    padding: 0,
    margin: 0,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    paddingLeft: 15,
    fontWeight: "light",
    fontSize: 14,
    fontFamily: "sans-serif",
  },
  child2Sec: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    color: "blue",
    height: 35,
    width: "10%",
    border: "none",
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },

  right: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  rightFirst: {
    height: 30,
    width: 90,
    background: "white",
    color: "rgb(40, 116, 240)",
    fontSize: 17,
    fontWeight: "light",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex:1,
  },

  login: {
    textDecoration: "none",
    marginLeft: 20,
    marginRight: 20,
  },

  rightSec: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "white",
    flex:1,
    marginRight: -20,
  },
  rightThird: {
    width: "auto",  
    flex:1,
    marginRight: -20,
    marginLeft: -20,
  },
  rightSel:{
    width: "auto",
    height: 30,
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "white",
    background: "rgb(40, 116, 240)",
    border: "none",
  },
 
  rightFourth: {
    display: "flex",
    flex:1,
    alignItems: "center",
    justifyContent: "left",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginRight: -20,
    marginLeft: -20,
  },
  cart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
};
