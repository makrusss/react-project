import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteItem, fetchItems } from "../store/actions/items";

export default function ProductTable() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  const handleAddForm = () => {
    navigate("/addProduct");
  };

  const handleDetailProduct = (id) => {
    navigate(`${id}`);
  };

  const handleEdit = (id) => {
    navigate(`editProduct/${id}`);
  };

  return (
    <section>
      <h1 className="head-product">Product</h1>
      <button
        type="button"
        onClick={handleAddForm}
        className="add-product btn btn-dark padding-2"
      >
        ADD PRODUCT
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Created By</th>
            <th scope="col">Main Image</th>
            <th scope="col">Images</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((el, id) => {
            return (
              <>
                <tr>
                  <th scope="row">{id + 1}</th>
                  <td>{el.name}</td>
                  <td>Pria</td>
                  <td>{el.price}</td>
                  <td>Admin</td>
                  <td>
                    <img src={el.mainImg} width={50} height={50} />
                  </td>
                  <td>
                    <button type="button" className="btn btn-success m-2">
                      Show Images
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleDetailProduct(el.id);
                      }}
                      className="btn btn-warning m-2"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => {
                        handleEdit(el.id);
                      }}
                      type="button"
                      className="btn btn-info m-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(el.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
