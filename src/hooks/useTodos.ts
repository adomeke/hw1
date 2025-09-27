import { useState, useEffect } from 'react';
import type { Todo } from '../types';
import { loadTodos, saveTodos, addTodo, toggleTodo, deleteTodo } from '../utils/todoStorage';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addNewTodo = (text: string) => {
    if (text.trim()) {
      setTodos(prev => addTodo(prev, text));
    }
  };

  const toggleTodoStatus = (id: string) => {
    setTodos(prev => toggleTodo(prev, id));
  };

  const removeTodo = (id: string) => {
    setTodos(prev => deleteTodo(prev, id));
  };

  return {
    todos,
    addTodo: addNewTodo,
    toggleTodo: toggleTodoStatus,
    deleteTodo: removeTodo
  };
};
