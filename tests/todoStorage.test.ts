import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Todo } from '../src/types';
import { addTodo, toggleTodo, deleteTodo, loadTodos, saveTodos } from '../src/utils/todoStorage';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Todo Storage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockTodo: Todo = {
    id: '1',
    text: 'Test todo',
    completed: false,
    createdAt: new Date('2023-01-01'),
  };

  describe('addTodo', () => {
    it('should add a new todo to the list', () => {
      const todos: Todo[] = [];
      const newTodos = addTodo(todos, 'New task');
      
      expect(newTodos).toHaveLength(1);
      expect(newTodos[0].text).toBe('New task');
      expect(newTodos[0].completed).toBe(false);
      expect(newTodos[0].id).toBeDefined();
    });

    it('should not add empty todos', () => {
      const todos: Todo[] = [];
      const newTodos = addTodo(todos, '');
      
      expect(newTodos).toHaveLength(0);
    });

    it('should not add whitespace-only todos', () => {
      const todos: Todo[] = [];
      const newTodos = addTodo(todos, '   ');
      
      expect(newTodos).toHaveLength(0);
    });
  });

  describe('toggleTodo', () => {
    it('should toggle todo completion status', () => {
      const todos: Todo[] = [mockTodo];
      const newTodos = toggleTodo(todos, '1');
      
      expect(newTodos[0].completed).toBe(true);
    });

    it('should not affect other todos', () => {
      const todos: Todo[] = [
        mockTodo,
        { ...mockTodo, id: '2', text: 'Another todo' }
      ];
      const newTodos = toggleTodo(todos, '1');
      
      expect(newTodos[0].completed).toBe(true);
      expect(newTodos[1].completed).toBe(false);
    });
  });

  describe('deleteTodo', () => {
    it('should remove todo from list', () => {
      const todos: Todo[] = [mockTodo];
      const newTodos = deleteTodo(todos, '1');
      
      expect(newTodos).toHaveLength(0);
    });

    it('should not affect other todos', () => {
      const todos: Todo[] = [
        mockTodo,
        { ...mockTodo, id: '2', text: 'Another todo' }
      ];
      const newTodos = deleteTodo(todos, '1');
      
      expect(newTodos).toHaveLength(1);
      expect(newTodos[0].id).toBe('2');
    });
  });

  describe('loadTodos', () => {
    it('should return empty array when no todos in storage', () => {
      localStorageMock.getItem.mockReturnValue(null);
      
      const todos = loadTodos();
      
      expect(todos).toEqual([]);
    });

    it('should load todos from localStorage', () => {
      const storedTodos = [{
        ...mockTodo,
        createdAt: mockTodo.createdAt.toISOString()
      }];
      localStorageMock.getItem.mockReturnValue(JSON.stringify(storedTodos));
      
      const todos = loadTodos();
      
      expect(todos).toHaveLength(1);
      expect(todos[0].text).toBe('Test todo');
      expect(todos[0].createdAt).toBeInstanceOf(Date);
    });
  });

  describe('saveTodos', () => {
    it('should save todos to localStorage', () => {
      const todos: Todo[] = [mockTodo];
      
      saveTodos(todos);
      
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'todos',
        JSON.stringify(todos)
      );
    });
  });
});
