import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../store/actions/categories";

export default function AddCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputAddCategory, setInputCategory] = useState({
    name: "",
  });

  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputCategory({
      ...inputAddCategory,
      [name]: value,
    });
  };

  const handleSubmit = (event)=>{
    event.preventDefault()
    dispatch(addCategory(inputAddCategory,navigate))
  }

  return (
    <>
      <h1 className="add-products">Add-Category : </h1>
      <form className="form-product" onSubmit={handleSubmit}>
        <div
          className="justify-content-center border rounded p-5 mt-5"
          id="register-form"
        >
          <div className="form-group">
            <label className="label-add-product">Category Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="product-name"
              placeholder="Enter Product Name"
              onChange={handleOnChange}
              name="name"
              value={inputAddCategory.name}
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
