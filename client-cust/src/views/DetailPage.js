import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchItemById } from "../stores/actions/item";

export default function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { item } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, []);

  const handleHomePage = (event) => {
    event.preventDefault()
    // console.log(`masuk hompage`)
    navigate("/");
  };
  // console.log(item,`<<<<`)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand">Uniqlow</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href=""
                  onClick={handleHomePage}
                >
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Welcome to Uniqlow</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Detail Product :
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="detail-product container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="photo card-img-top mb-5 mb-md-0"
                src={item.mainImg}
                border={1}
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{item.name}</h1>
              <div className="fs-5">
                <span>Rp{item.price}</span>
              </div>
              <div className="fs-5 mb-3">
                <span>Stock:{item.stock}</span>
              </div>
              <p className="lead">{item.description}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </>
  );
}
