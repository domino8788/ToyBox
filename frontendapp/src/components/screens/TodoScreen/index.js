import React, { useCallback, useContext } from 'react';
import Context, { INSERT_TODO, TOGGLE_TODO, DELETE_TODO } from 'stores/Context';

import TodoTemplate from 'components/templates/TodoTemplate';

const TodoScren = () => {
  const [{ todos }, dispatch] = useContext(Context);
  const onInsert = useCallback((text) => dispatch(INSERT_TODO, { text }), [dispatch]);
  const onToggle = useCallback((id) => dispatch(TOGGLE_TODO, { id }), [dispatch]);
  const onDelete = useCallback((id) => dispatch(DELETE_TODO, { id }), [dispatch]);

  return <TodoTemplate todos={todos} onInsert={onInsert} onToggle={onToggle} onDelete={onDelete} />;
};

export default TodoScren;
