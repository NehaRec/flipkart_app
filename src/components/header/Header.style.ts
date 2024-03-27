import { CSSProperties } from "react";

interface StyleType {
  [key: string]: CSSProperties;
}

export const HeaderStyle: StyleType = {
  container: {
    height: "50px",
    backgroundColor: "red",
  },
  child: {
    backgroundColor: "pink",
  },
};
