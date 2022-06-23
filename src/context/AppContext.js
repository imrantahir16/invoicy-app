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
  setEscapeOverflow: (boolean) => {},
  setInitLoading: (boolean) => {},
  setScreenLoading: (boolean) => {},
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
      const { showNavBar, darkTheme, initLoading } = updateData;
      localforage.setItem("appContext", { initLoading, showNavBar, darkTheme });
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

  const setInitLoading = useCallback((boolean) => {
    setState((prev) => ({
      ...prev,
      initLoading: boolean,
    }));
  }, []);

  const setScreenLoading = useCallback((boolean) => {
    setState((prev) => {
      return { ...prev, screenLoading: boolean };
    });
  }, []);
  const setEscapeOverflow = useCallback((boolean) => {
    setState((prev) => {
      return { ...prev, escapeOverflow: boolean };
    });
  }, []);

  useEffect(() => {
    (async () => {
      const appContext = await localforage.getItem("appContext");
      if (appContext) {
        setState((prev) => ({ ...prev, showNavBar: appContext.showNavBar }));
      }
    })();
  }, []);

  return (
    <AppCtx.Provider
      value={{
        ...state,
        toggleNavBar,
        toggleTheme,
        setInitLoading,
        setEscapeOverflow,
        setScreenLoading,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const useAppContext = () => useContext(AppCtx);
