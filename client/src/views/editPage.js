import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../store/actions/items";
import EditProductForm from "../components/editProductForm";
import { useEffect } from "react";

export default function EditPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchItemById(id));
  }, []);

  const { item } = useSelector((state) => state.items);
  return (
    <>
      <EditProductForm item={item} id={id} />
    </>
  );
}
