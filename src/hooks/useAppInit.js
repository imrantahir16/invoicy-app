import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAppContext } from "../context/AppContext";
import { setAllProducts } from "../store/productsSlice";

const useAppInit = () => {
  const { setInitLoading } = useAppContext();
  const dispatch = useDispatch();

  const initialSetData = useCallback(async () => {
    try {
      const products = await JSON.parse(localStorage.getItem("products"));

      products && dispatch(setAllProducts(products));
    } catch (error) {
      console.log(error);
    } finally {
      setInitLoading(false);
    }
  }, [setInitLoading, dispatch]);

  return {
    initialSetData,
  };
};

export default useAppInit;
