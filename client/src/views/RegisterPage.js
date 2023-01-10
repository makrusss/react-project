import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/actions/users";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setRegisterInput({
      ...registerInput,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(registerInput, navigate));
  };

  return (
    <>
      <div className="col">
        <div className="form-signin m-auto">
          <div
            className="justify-content-center border rounded p-5 mt-5"
            id="register-form"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <h1>Register</h1>
              </div>
              <div className="mb-3 ">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="register-username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter your username ..."
                  name="username"
                  onChange={handleChange}
                  value={registerInput.username}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="register-email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Email ..."
                  name="email"
                  onChange={handleChange}
                  value={registerInput.email}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="register-password"
                  className="form-control"
                  id="password"
                  placeholder="We'll never share your password with anyone else ..."
                  name="password"
                  onChange={handleChange}
                  value={registerInput.password}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="register-phone"
                  placeholder="Enter phone number (optional) ..."
                  name="phoneNumber"
                  onChange={handleChange}
                  value={registerInput.phoneNumber}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  id="register-address"
                  className="form-control"
                  rows="3"
                  placeholder="Enter your address (optional) ..."
                  name="address"
                  onChange={handleChange}
                  value={registerInput.address}
                  autoComplete="off"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
