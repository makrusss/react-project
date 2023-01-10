const initialState = {
  access_token: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "access_token/setAcess_token":
      // console.log(`masuk sini`,action.payload)
      return { ...state, access_token: action.payload };
    default:
      return state;
  }
}

export default userReducer;
