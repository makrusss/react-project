import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCategory } from "../store/actions/categories";
import { editItem } from "../store/actions/items";

export default function EditProductForm({ item, id }) {
  console.log(item, `<<<`);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputEditForm, setInputEditForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    mainImg: "",
    categoryId: "",
  });

  useEffect(() => {
    if (Object.keys(item)) {
      setInputEditForm({
        name: item.name,
        description: item.description,
        price: item.price,
        stock: item.stock,
        mainImg: item.mainImg,
        categoryId: item.categoryId,
      });
    }
  }, [item]);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const { categories } = useSelector((state) => state.categories);

  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputEditForm({
      ...inputEditForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editItem(inputEditForm, id, navigate));
  };
  return (
    <>
      <h1 className="add-products">Edit-Product : </h1>
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
              onChange={handleOnChange}
              name="name"
              value={inputEditForm.name}
              required
            />
          </div>
          <div className="form-group">
            <label className="label-add-product">Description</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="product-name"
              onChange={handleOnChange}
              name="description"
              value={inputEditForm.description}
              required
            />
          </div>
          <div className="form-group">
            <label className="label-add-product">Price</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="product-name"
              onChange={handleOnChange}
              name="price"
              value={inputEditForm.price}
              required
            />
          </div>
          <div className="form-group">
            <label className="label-add-product">Stock</label>
            <input
              type="number"
              className="form-control"
              aria-describedby="product-name"
              onChange={handleOnChange}
              name="stock"
              value={inputEditForm.stock}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              className="form-select"
              name="categoryId"
              onChange={handleOnChange}
              value={inputEditForm.categoryId}
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
              onChange={handleOnChange}
              name="mainImg"
              value={inputEditForm.mainImg}
              required
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
