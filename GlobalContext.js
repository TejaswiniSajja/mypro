// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    cart: [],
    user: null,
    globalCount: 0,
  });

  const addToCart = (product) => {
    setState((prevState) => ({
      ...prevState,
      cart: [...prevState.cart, product],
      globalCount: prevState.globalCount + 1,
    }));
  };

  return (
    <GlobalContext.Provider value={{ state, setState, addToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
