import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AppData from "../shared/AppData.json";
import localforage from "localforage";

const initData = {
  ...AppData,
  toggleNavBar: () => {},
  toggleTheme: () => {},
};
export const AppCtx = createContext(initData);

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initData);

  const toggleNavBar = useCallback(() => {
    setState((prev) => {
      const updateData = {
        ...prev,
        showNavBar: !prev?.showNavBar,
      };
      const { showNavBar, darkTheme } = updateData;
      localforage.setItem("appContext", { showNavBar, darkTheme });
      return updateData;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setState((prev) => {
      const updateData = {
        ...prev,
        darkTheme: !prev?.darkTheme,
      };
      const { darkTheme, showNavBar } = updateData;
      localforage.setItem("appContext", { darkTheme, showNavBar });
      return updateData;
    });
  }, []);

  useEffect(() => {
    (async () => {
      const appContext = await localforage.getItem("appContext");
      if (appContext) {
        setState((prev) => ({ ...prev, showNavbar: appContext.showNavBar }));
      }
    })();
  }, []);

  return (
    <AppCtx.Provider value={{ ...state, toggleNavBar, toggleTheme }}>
      {children}
    </AppCtx.Provider>
  );
};

export const useAppContext = () => useContext(AppCtx);
