import type { Todo } from '../types';

const STORAGE_KEY = 'todos';

export const loadTodos = (): Todo[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((todo: { id: string; text: string; completed: boolean; createdAt: string }) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
    }
  } catch (error) {
    console.error('Error loading todos:', error);
  }
  return [];
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos:', error);
  }
};

export const addTodo = (todos: Todo[], text: string): Todo[] => {
  const trimmedText = text.trim();
  if (!trimmedText) {
    return todos;
  }
  
  const newTodo: Todo = {
    id: Date.now().toString(),
    text: trimmedText,
    completed: false,
    createdAt: new Date()
  };
  return [...todos, newTodo];
};

export const toggleTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};

export const deleteTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.filter(todo => todo.id !== id);
};
