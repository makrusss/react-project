import Swal from 'sweetalert2'
const base_url = "http://localhost:3004";

export function fetchCategory() {
  return (dispatch) => {
    fetch(`${base_url}/categories`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "categories/setCategories",
          payload: data.all,
        });
      })
      .catch((err) => {
        console.log(err, `<<<<<<<<<<<`);
      });
  };
}

export function fetchCategoryById(id) {
  return (dispatch) => {
    fetch(`${base_url}/categories/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "category/setCategory",
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteCategory(id) {
  return (dispatch) => {
    fetch(`${base_url}/categories/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw { msg: "error" };
        }
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Delete Success",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(fetchCategory());
      })
      .catch((error) => console.log(error));
  };
}

export function addCategory(input, navigate) {
  return () => {
    fetch(`${base_url}/categories`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      method: "POST",
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (!res.ok) {
          throw { msg: "error" };
        }
        return res.json();
      })
      .then((data) => {
        fetchCategory();
        Swal.fire({
          icon: "success",
          title: "Add Category Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/categories");
      })
      .catch((error) => console.log(error));
  };
}
