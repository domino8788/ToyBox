import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import produce from 'immer';

const Context = createContext();

const insertLog = ({ title, body, date }) =>
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

const updateLog = ({ id, title, body, date }) =>
  produce((draft) => {
    if (!draft.logs) {
      draft.logs = [];
    } else {
      draft.logs[draft.logs.findIndex((log) => log.id === id)] = {
        id,
        title,
        body,
        date,
      };
    }
  });

const deleteLog = ({ id }) =>
  produce((draft) => {
    if (!draft.logs) {
      draft.logs = [];
    }
    draft.logs.splice(
      draft.logs.findIndex((log) => log.id === id),
      1,
    );
  });

function reducer(state, action) {
  switch (action.type) {
    case 'INSERT_LOG': {
      return insertLog(action.payload)(state);
    }
    case 'UPDATE_LOG': {
      return updateLog(action.payload)(state);
    }
    case 'DELETE_LOG': {
      return deleteLog(action.payload)(state);
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
