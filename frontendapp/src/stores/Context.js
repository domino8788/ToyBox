import React, { createContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = (props) => {
  const [store, setStore] = useState({});
  return <Context.Provider value={[store, setStore]}>{props.children}</Context.Provider>;
};
