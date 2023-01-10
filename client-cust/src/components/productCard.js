import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchItems } from "../stores/actions/item";

export default function ProductCard() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  const handleDetail = (id) => {
    // console.log(id, `<<<<`);
    navigate(`/detail/${id}`);
  };
  return (
    <>
      {items.map((el, id) => {
        return (
          <div className="col mb-5">
            <div className="card h-100">
              <img
                className="card-img-top"
                src={el.mainImg}
                alt="..."
                width={200}
                height={300}
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{el.name}</h5>
                  Rp{el.price}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <span
                    className="btn btn-outline-dark mt-auto"
                    onClick={() => {
                      handleDetail(el.id);
                    }}
                  >
                    Detail Product
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
