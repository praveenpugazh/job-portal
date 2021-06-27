import { createContext, useReducer } from "react";
import userReducer from "./userReducer";
import axios from "axios";

const initialState = {
  user: {
    loading: true,
    data: {
      id: null,
      name: "",
    },
    token: null,
  },
};
const userContext = createContext(initialState);

export const UserState = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = async () => {
    const { data } = await axios.get("http://localhost:5000/jobs");
    dispatch({ type: "LOGIN_USER", payload: data });
  };
  const signupUser = async (inputData) => {
    const { data } = await axios.post(
      "http://localhost:5000/auth/signup",
      inputData
    );
    dispatch({ type: "SIGNUP_USER", payload: data.token });
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        loginUser,
        signupUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default userContext;
