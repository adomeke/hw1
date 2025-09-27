import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Calculator from '../src/components/Calculator';
import TodoList from '../src/components/TodoList';
import TicTacToe from '../src/components/TicTacToe';

// Mock localStorage for TodoList tests
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Calculator Component', () => {
  it('should render calculator interface', () => {
    render(<Calculator />);
    
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    expect(screen.getByText('Clear')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
  });

  it('should handle number input', async () => {
    const user = userEvent.setup();
    render(<Calculator />);
    
    await user.click(screen.getByText('5'));
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
    
    await user.click(screen.getByText('3'));
    expect(screen.getByDisplayValue('53')).toBeInTheDocument();
  });

  it('should handle addition', async () => {
    const user = userEvent.setup();
    render(<Calculator />);
    
    await user.click(screen.getByText('5'));
    await user.click(screen.getByText('+'));
    await user.click(screen.getByText('3'));
    await user.click(screen.getByText('='));
    
    expect(screen.getByDisplayValue('8')).toBeInTheDocument();
  });

  it('should clear display', async () => {
    const user = userEvent.setup();
    render(<Calculator />);
    
    await user.click(screen.getByText('5'));
    await user.click(screen.getByText('Clear'));
    
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });
});

describe('TodoList Component', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue('[]');
  });

  it('should render todo list interface', () => {
    render(<TodoList />);
    
    expect(screen.getByText('To-Do List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new task...')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('should add new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add');
    
    await user.type(input, 'Test task');
    await user.click(addButton);
    
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  it('should not add empty todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const addButton = screen.getByText('Add');
    await user.click(addButton);
    
    expect(screen.getByText('No tasks yet. Add one above!')).toBeInTheDocument();
  });
});

describe('TicTacToe Component', () => {
  it('should render game interface', () => {
    render(<TicTacToe />);
    
    expect(screen.getByText('Tic-Tac-Toe')).toBeInTheDocument();
    expect(screen.getByText('Current player: X')).toBeInTheDocument();
    expect(screen.getByText('New Game')).toBeInTheDocument();
  });

  it('should handle cell clicks', async () => {
    const user = userEvent.setup();
    render(<TicTacToe />);
    
    const cells = screen.getAllByRole('button').filter(button => 
      button.textContent === '' && button.getAttribute('class')?.includes('cursor-pointer')
    );
    
    await user.click(cells[0]);
    expect(cells[0]).toHaveTextContent('X');
  });

  it('should reset game', async () => {
    const user = userEvent.setup();
    render(<TicTacToe />);
    
    const cells = screen.getAllByRole('button').filter(button => 
      button.textContent === '' && button.getAttribute('class')?.includes('cursor-pointer')
    );
    
    await user.click(cells[0]);
    expect(cells[0]).toHaveTextContent('X');
    
    await user.click(screen.getByText('New Game'));
    expect(cells[0]).toHaveTextContent('');
  });
});
