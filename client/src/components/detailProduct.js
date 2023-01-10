import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../store/actions/items";

export default function ProductById() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { item } = useSelector((state) => state.items);
  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [id]);
  return (
    <>
      <section className="py-5">
        <div className="detail-product container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="photo card-img-top mb-5 mb-md-0"
                src={item.mainImg}
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
    </>
  );
}
