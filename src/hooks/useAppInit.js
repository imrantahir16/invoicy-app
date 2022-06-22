// import localforage from "localforage";
import { useCallback } from "react";
import { useAppContext } from "../context/AppContext";

const useAppInit = () => {
  const { setInitLoading } = useAppContext();

  const initialSetData = useCallback(async () => {
    try {
      // const [appContext] = await localforage.getItem("appContext");
    } catch (error) {
      console.log(error);
    } finally {
      setInitLoading(false);
    }
  }, [setInitLoading]);

  return {
    initialSetData,
  };
};

export default useAppInit;
