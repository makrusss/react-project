import Swal from "sweetalert2";
const base_url = "http://localhost:3004";

export function fetchItems() {
  return (dispatch) => {
    fetch(`${base_url}/products`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "items/fetchItems",
          payload: data.allProduct,
        });
      })
      .catch((err) => {
        console.log(err, `<<<<<<<<<<<`);
      });
  };
}

export function fetchItemById(id) {
  return (dispatch) => {
    fetch(`${base_url}/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data,`<<< INI DATA DI REDUCER`)
        dispatch({
          type: "item/fetchItemById",
          payload: data.oneProduct,
        });
      })
      .catch((err) => {
        console.log(err, `INI ERROR`);
      });
  };
}

export function deleteItem(id) {
  return (dispatch) => {
    console.log(`MASUK DELETE`);
    fetch(`${base_url}/products/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Delete Product Success",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(fetchItems());
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addItem(input, navigate) {
  return (dispatch) => {
    return fetch(`${base_url}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (!res.ok) {
          throw { msg: "error" };
        }
        return res.json();
      })
  };
}

export function editItem(input, id, navigate) {
  return (dispatch) => {
    fetch(`${base_url}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Edit Product Success",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
        dispatch(fetchItems());
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oh No...",
          text: "Something went wrong!",
        });
        console.log(err);
      });
  };
}
