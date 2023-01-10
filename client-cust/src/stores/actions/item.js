const base_url = "http://localhost:3004";

export function fetchItems() {
  return (dispatch) => {
    fetch(`${base_url}/products`)
      .then((res) => {
        if (!res.ok) {
          throw { msg: "error" };
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data.allProduct,`<< di actions`)
        dispatch({
          type: "items/fetchItems",
          payload: data.allProduct,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function fetchItemById(id) {
  return (dispatch) => {
    fetch(`${base_url}/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw { msg: "error" };
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "item/fetchItem", payload: data.oneProduct });
      })
      .catch((err) => console.log(err));
  };
}
