import produce from 'immer';

export const insertTodo = ({ text }) =>
  produce(({ todos }) => {
    const nextId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    todos.push(todo);
  });

export const toggleTodo = ({ id }) =>
  produce(({ todos }) => {
    const targetTodo = todos.find((todo) => todo.id === id);
    if (targetTodo) targetTodo.done = !targetTodo.done;
  });

export const deleteTodo = ({ id }) =>
  produce(({ todos }) => {
    const targetTodoIndex = todos.findIndex((todo) => todo.id === id);
    if (targetTodoIndex !== -1) todos.splice(targetTodoIndex, 1);
  });
