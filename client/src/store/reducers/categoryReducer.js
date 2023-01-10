const initialState = {
  categories: [],
  category: {},
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "categories/setCategories":
      return { ...state, categories: action.payload };
    case "category/setCategory":
      return { ...state, category: action.payload };
    default:
      return state;
  }
}
