import React, { createContext, useReducer, useEffect, useRef } from 'react';
import produce from 'immer';
import storage from 'storages';
import { insertLog, updateLog, deleteLog } from './Log';
import { insertTodo, toggleTodo, deleteTodo } from './Todo';
import { handleCommon } from './Common';

const Context = createContext();
const initState = {
  logs: [],
  todos: [],
  keyword: '',
  common: {
    isLoading: false,
  },
};
const init = ({ data }) =>
  produce((draft) => {
    Object.entries(initState).forEach(([key, initValue]) => (draft[key] = data[key] || initValue));
  });

const searchKeyword = ({ keyword }) =>
  produce((draft) => {
    draft.keyword = keyword;
  });

const INIT = 'INIT';
export const INSERT_LOG = 'INSERT_LOG';
export const UPDATE_LOG = 'UPDATE_LOG';
export const DELETE_LOG = 'DELETE_LOG';
export const INSERT_TODO = 'INSERT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SEARCH_KEYWORD = 'SEARCH_KEYWORD';
export const HANDLE_COMMON = 'HANDLE_COMMON';

const getAction = {
  INIT: init,
  INSERT_LOG: insertLog,
  UPDATE_LOG: updateLog,
  DELETE_LOG: deleteLog,
  INSERT_TODO: insertTodo,
  TOGGLE_TODO: toggleTodo,
  DELETE_TODO: deleteTodo,
  SEARCH_KEYWORD: searchKeyword,
  HANDLE_COMMON: handleCommon,
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
    case DELETE_LOG:
    case SEARCH_KEYWORD:
    case HANDLE_COMMON: {
      return handleAction(getAction[action.type]);
    }
    default: {
      throw new Error('Unhandled action type');
    }
  }
}

export const ContextProvider = (props) => {
  const initialStoreRef = useRef(null);
  const [store, _dispatch] = useReducer(reducer, initState);
  const dispatch = (type, payload) => _dispatch({ type, payload });
  useEffect(() => {
    storage
      .get()
      .then((data) => {
        if (data) {
          data.common = initState.common;
          initialStoreRef.current = data;
          dispatch(INIT, { data });
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (store !== initialStoreRef.current) {
      storage.set(store).catch(console.error);
    }
  }, [store]);
  return <Context.Provider value={[store, dispatch]}>{props.children}</Context.Provider>;
};

export default Context;
