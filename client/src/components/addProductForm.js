import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCategory } from "../store/actions/categories";
import { addItem } from "../store/actions/items";

export default function AddForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const { categories } = useSelector((state) => state.categories);
  const [inputAddForm, setInputAddForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    mainImg: "",
    categoryId: "",
  });
  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputAddForm({
      ...inputAddForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log(inputAddForm, `<<< hasil form`);
    event.preventDefault();
    dispatch(addItem(inputAddForm)).then((data) => {
      // console.log(data, `<<< hasil ADD`);
      Swal.fire({
        icon: "success",
        title: "Add Product Success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oh No...",
        text: "Something went wrong!",
      });
      console.log(err, `<<< error `);
    });
  };

  return (
    <>
      <h1 className="add-products">Add-Product : </h1>
      <form className="form-product" onSubmit={handleSubmit}>
        <div
          className="justify-content-center border rounded p-5 mt-5"
          id="register-form"
        >
          <div className="form-group">
            <label className="label-add-product">Product Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="product-name"
              placeholder="Enter Product Name"
              onChange={handleOnChange}
              name="name"
              value={inputAddForm.name}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label className="label-add-product">Description</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="product-name"
              placeholder="Enter Product Description"
              onChange={handleOnChange}
              name="description"
              value={inputAddForm.description}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label className="label-add-product">Price</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="product-name"
              placeholder="Ente Product Price"
              onChange={handleOnChange}
              name="price"
              value={inputAddForm.price}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label className="label-add-product">Stock</label>
            <input
              type="number"
              className="form-control"
              aria-describedby="product-name"
              placeholder="Enter Product Stock"
              onChange={handleOnChange}
              name="stock"
              value={inputAddForm.stock}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              className="form-select"
              name="categoryId"
              onChange={handleOnChange}
              value={inputAddForm.categoryId}
              required
            >
              <option selected>-- Select Categories --</option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label className="label-add-product">Product Image</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Image"
              onChange={handleOnChange}
              name="mainImg"
              value={inputAddForm.mainImg}
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
