const initialState = {
  items: [],
  item: {},
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "items/fetchItems":
      return { ...state, items: action.payload };
    case "item/fetchItemById":
      return { ...state, item: action.payload };
    default:
      return state;
  }
}

export default itemsReducer;
