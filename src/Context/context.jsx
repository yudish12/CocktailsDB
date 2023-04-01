import { useContext, createContext } from "react";
import { useReducer } from "react";
import { reducer } from "./Reducer";

const GlobalContext = createContext();

const defaultState = {
  loading: false,
  searchQuery: "",
  cocktails: [],
  singleCocktail: {},
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useContextHook = () => {
  return useContext(GlobalContext);
};

export default AppContext;
