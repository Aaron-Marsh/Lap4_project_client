import axios from "axios";

//LoggedIn

export const login = () => {
  return {
    type: "change",
  };
};

export const logout = () => {
  return {
    type: "change",
  };
};

//Login Footer

export const close = () => {
  return {
    type: "close",
  };
};
