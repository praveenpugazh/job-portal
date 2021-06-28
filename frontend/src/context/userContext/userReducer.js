const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("token", action.payload);
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        loading: false,
        token: action.payload,
        isAuthenticated: true,
      };
    case "SIGNUP_USER":
      localStorage.setItem("token", action.payload);
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        user: {
          id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
          isRecruiter: action.payload.isRecruiter,
        },
        loading: false,
        isAuthenticated: true,
        token: action.payload,
      };
    case "LOGGED_USER_DATA": {
      localStorage.setItem("user", action.payload);
      return {
        ...state,
        user: {
          id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
          isRecruiter: action.payload.isRecruiter,
        },
        loading: false,
      };
    }
    case "LOGOUT_USER": {
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        loading: false,
        isAuthenticated: false,
        user: {
          id: "",
          name: "",
          email: "",
          isRecruiter: false,
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
