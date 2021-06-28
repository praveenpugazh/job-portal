import { createContext, useReducer } from "react";
import jobReducer from "./jobReducer";
import axios from "axios";
const initialState = {
  jobs: {
    loading: true,
    data: [],
  },
  token: localStorage.getItem("token") || null,
};
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBkODJjMzliNWU2ZjQzOWJjZmE2YTU3In0sImlhdCI6MTYyNDc4MDYyMiwiZXhwIjoxNjI1MTQwNjIyfQ.2hM4PESO4HYBUW-m8Tn_09FG0J_jPHxBDzziOVGxJDY";
const jobContext = createContext(initialState);

export const JobState = (props) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  const getJobs = async () => {
    const { data } = await axios.get("http://localhost:5000/jobs", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    dispatch({ type: "GET_JOBS", payload: data });
  };
  return (
    <jobContext.Provider
      value={{
        jobs: state.jobs,
        getJobs,
      }}
    >
      {props.children}
    </jobContext.Provider>
  );
};

export default jobContext;
