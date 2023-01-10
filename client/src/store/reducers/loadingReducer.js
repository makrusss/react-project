const initialState = {
    loading: true,
  };
  
  function loadingReducer(state = initialState, action) {
    switch (action.type) {
      case "loading/setLoading":
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  }
  
  export default loadingReducer;
  