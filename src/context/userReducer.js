export function userReducer(state, action) {
  switch (action.type) {
    case "login":
      // datatype of return have to equal with intialState
      return {
        ...state,
        // isLoggedIn: action.payload.login,
        isLoggedIn: true,
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      break;
  }
}
