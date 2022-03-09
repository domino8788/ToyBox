import React, { createContext, useReducer, useEffect } from 'react';
import produce from 'immer';
import storage from 'storages';
import { insertLog, updateLog, deleteLog } from './Log';
import { insertTodo, toggleTodo, deleteTodo } from './Todo';

const Context = createContext();
const initState = { logs: [], todos: [] };
const init = ({ data }) =>
  produce((draft) => {
    Object.entries(initState).forEach(([key, initValue]) => (draft[key] = data[key] || initValue));
  });

const INIT = 'INIT';
export const INSERT_LOG = 'INSERT_LOG';
export const UPDATE_LOG = 'UPDATE_LOG';
export const DELETE_LOG = 'DELETE_LOG';
export const INSERT_TODO = 'INSERT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const getAction = {
  INIT: init,
  INSERT_LOG: insertLog,
  UPDATE_LOG: updateLog,
  DELETE_LOG: deleteLog,
  INSERT_TODO: insertTodo,
  TOGGLE_TODO: toggleTodo,
  DELETE_TODO: deleteTodo,
};
const makeAction = (payload, state) => (action) => action(payload)(state);

function reducer(state, action) {
  const handleAction = makeAction(action.payload, state);

  switch (action.type) {
    case INIT:
    case INSERT_TODO:
    case TOGGLE_TODO:
    case DELETE_TODO:
    case INSERT_LOG:
    case UPDATE_LOG:
    case DELETE_LOG: {
      return handleAction(getAction[action.type]);
    }
    default: {
      return state;
    }
  }
}

export const ContextProvider = (props) => {
  const [store, _dispatch] = useReducer(reducer, initState);
  const dispatch = (type, payload) => _dispatch({ type, payload });
  useEffect(() => {
    storage
      .get()
      .then((data) => dispatch(INIT, { data }))
      .catch(console.error);
  }, []);

  useEffect(() => {
    storage.set(store).catch(console.error);
  }, [store]);
  return <Context.Provider value={[store, dispatch]}>{props.children}</Context.Provider>;
};

export default Context;
