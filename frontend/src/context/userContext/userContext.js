import { createContext, useReducer } from "react";
import userReducer from "./userReducer";
import axios from "axios";

const initialState = {
  user: {
    id: "",
    name: "",
    isRecruiter: false,
    jobs: [],
  },
  loading: true,
  isAuthenticated: localStorage.getItem("isAuthenticated"),
  token: localStorage.getItem("token"),
};
const userContext = createContext(initialState);

export const UserState = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = async (inputData) => {
    const { data } = await axios.post(
      "http://localhost:5000/auth/login",
      inputData
    );
    dispatch({ type: "LOGIN_USER", payload: data.token });
    console.log(`Bearer ${data.token}`);
    const userData = await axios.get("http://localhost:5000/auth/userprofile", {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    const { user } = userData.data;
    dispatch({ type: "LOGGED_USER_DATA", payload: user });
  };

  const signupUser = async (inputData) => {
    const { data } = await axios.post(
      "http://localhost:5000/auth/signup",
      inputData
    );
    dispatch({ type: "SIGNUP_USER", payload: data.token });
    console.log("calling user data", data.token);
    const userData = await axios.get("http://localhost:5000/auth/userprofile", {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    const { user } = userData.data;
    dispatch({ type: "LOGGED_USER_DATA", payload: user });
  };

  const logoutUser = async () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        loginUser,
        signupUser,
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        logoutUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default userContext;
