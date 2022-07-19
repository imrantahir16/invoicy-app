import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAppContext } from "../context/AppContext";
import { setAllProducts } from "../store/productsSlice";
import { setAllClients } from "../store/clientsSlice";
import { updateCompanyData } from "../store/companySlice";

const useAppInit = () => {
  const { setInitLoading } = useAppContext();
  const dispatch = useDispatch();

  const initialSetData = useCallback(async () => {
    try {
      const [products, clients, companyData] = await Promise.all([
        JSON.parse(localStorage.getItem("products")),
        JSON.parse(localStorage.getItem("clients")),
        JSON.parse(localStorage.getItem("companyData")),
      ]);

      products && dispatch(setAllProducts(products));

      clients && dispatch(setAllClients(clients));

      companyData && dispatch(updateCompanyData(companyData));
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
