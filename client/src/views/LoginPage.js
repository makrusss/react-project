import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/actions/users";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(`<-----masuk handle change`);
    const value = event.target.value;
    const name = event.target.name;

    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(loginInput, navigate));
  };

  return (
    <>
      <section className="container" id="login-section">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3 mt-5">Uniqlow Admin Site </h1>
            <span>SSO_Log in or Sign up by your partner!</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-signin m-auto">
              <div
                className="justify-content-center border rounded p-5 mt-5"
                id="login-form"
              >
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <h1>Login</h1>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="login-email"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email ..."
                      name="email"
                      onChange={handleChange}
                      value={loginInput.email}
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="login-password"
                      placeholder="Enter Your Password ..."
                      onChange={handleChange}
                      name="password"
                      value={loginInput.password}
                      autoComplete="off"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                  <hr />
                  <div>
                    <p>
                      Don't have an account?
                      <span className="text-black-50 fw-bold m-2">
                        Request Needed
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <img
              className="image-login"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1029px-UNIQLO_logo.svg.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
