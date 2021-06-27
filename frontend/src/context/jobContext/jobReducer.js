const jobReducer = (state, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, jobs: { loading: false, data: action.payload } };
    default:
      return state;
  }
};

export default jobReducer;
