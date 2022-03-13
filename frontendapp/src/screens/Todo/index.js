import React, { useCallback, useContext } from 'react';
import Context, { INSERT_TODO, TOGGLE_TODO, DELETE_TODO } from 'stores/Context';
import Template from 'templates';

const Todo = () => {
  const [{ todos }, dispatch] = useContext(Context);
  const onInsert = useCallback((text) => dispatch(INSERT_TODO, { text }), [dispatch]);
  const onToggle = useCallback((id) => dispatch(TOGGLE_TODO, { id }), [dispatch]);
  const onDelete = useCallback((id) => dispatch(DELETE_TODO, { id }), [dispatch]);

  return <Template.Todo todos={todos} onInsert={onInsert} onToggle={onToggle} onDelete={onDelete} />;
};

export default Todo;
