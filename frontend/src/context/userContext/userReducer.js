const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: {
          loading: false,
          token: action.payload,
        },
      };
    case "SIGNUP_USER":
      return {
        ...state,
        user: {
          loading: false,
          token: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
