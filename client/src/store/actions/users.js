import Swal from 'sweetalert2'
const base_url = "http://localhost:3004";

export function login(loginInput, navigate) {
  //   console.log(`masuk login`);
  return (dispatch) => {
    fetch(`${base_url}/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInput),
    })
      .then((res) => {
        if (!res.ok) {
          throw { msg: "error" };
        }
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "access_token/setAcess_token",
          payload: data.access_token,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oh No...",
          text: "Something went wrong!",
        })
      });
  };
}

export function register(registerInput, navigate) {
  return () => {
    fetch(`${base_url}/users/registerAdmin`, {
      method: `POST`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(registerInput),
    })
      .then((res) => {
        if (!res.ok) {
          throw { msg: "error" };
        }
        return res.json();
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Register Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oh No...",
          text: "Something went wrong!",
        })
      });
  };
}
