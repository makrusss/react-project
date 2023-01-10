import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCategory, fetchCategory } from "../store/actions/categories";

export default function Category() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const handleAddCategory = () => {
    navigate(`/addCategory`);
  };

  const handleDeleteButtonCategory = (id) => {
    dispatch(deleteCategory(id));
  };
  return (
    <>
      <section>
        <h1 className="head-category">Category</h1>
        <button className="create-category btn btn-primary"
        onClick={()=>{
          handleAddCategory()
        }}>
          Create Category
        </button>
      </section>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((el, id) => {
            return (
              <>
                <tr>
                  <td scope="row">{id + 1}</td>
                  <td>{el.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDeleteButtonCategory(el.id);
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
    </>
  );
}
