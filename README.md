# Mini Apps Collection

A collection of three useful mini-applications built with React, TypeScript, Vite, and Tailwind CSS.

## Features

### 🧮 Calculator

- Basic arithmetic operations (+, -, ×, ÷)
- Decimal number support
- Clear functionality
- Chained operations

### 📝 To-Do List

- Add, complete, and delete tasks
- Local storage persistence
- Task completion tracking
- Clean, intuitive interface

### ⭕ Tic-Tac-Toe

- Two-player game
- Win detection (rows, columns, diagonals)
- Draw detection
- New game functionality

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cpsc8740_hw1
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Calculator.tsx
│   ├── TodoList.tsx
│   └── TicTacToe.tsx
├── hooks/              # Custom React hooks
│   ├── useTodos.ts
│   └── useTicTacToe.ts
├── utils/              # Utility functions
│   ├── calculator.ts
│   ├── todoStorage.ts
│   └── gameLogic.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Testing

The project includes comprehensive tests:

- **Unit tests** for utility functions
- **Component tests** for React components
- **Integration tests** for user interactions

Run tests with:

```bash
npm test
```

## Features Implementation

### Calculator

- Object-oriented design with Calculator class
- State management for display and operations
- Support for all basic arithmetic operations
- Error handling for division by zero

### To-Do List

- Local storage persistence using localStorage API
- Custom hook for state management
- CRUD operations (Create, Read, Update, Delete)
- Real-time completion tracking

### Tic-Tac-Toe

- Game state management with custom hook
- Win condition detection for all possible combinations
- Turn-based gameplay
- Game reset functionality

## CI/CD

The project includes GitHub Actions workflow for:

- Automated testing
- Linting
- Build verification
- Node.js 20 compatibility

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is created for educational purposes as part of CPSC 8740 coursework.
