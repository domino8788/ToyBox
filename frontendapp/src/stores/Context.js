import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';

const Context = createContext();

const addLog = ({ title, body, date }) =>
  produce((draft) => {
    if (!draft.logs) {
      draft.logs = [];
    }
    draft.logs.push({
      id: uuidv4(),
      title,
      body,
      date,
    });
  });

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_LOG': {
      return addLog(action.payload)(state);
    }
    default:
      return state;
  }
}

export const ContextProvider = (props) => {
  const [store, dispatch] = useReducer(reducer, {});
  return <Context.Provider value={[store, dispatch]}>{props.children}</Context.Provider>;
};

export default Context;
