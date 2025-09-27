import React, { useState } from 'react';
import Calculator from './components/Calculator';
import TodoList from './components/TodoList';
import TicTacToe from './components/TicTacToe';

type AppTab = 'calculator' | 'todos' | 'tictactoe';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>('calculator');

  const tabs = [
    { id: 'calculator' as AppTab, label: 'Calculator', icon: '🧮' },
    { id: 'todos' as AppTab, label: 'To-Do List', icon: '📝' },
    { id: 'tictactoe' as AppTab, label: 'Tic-Tac-Toe', icon: '⭕' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'calculator':
        return <Calculator />;
      case 'todos':
        return <TodoList />;
      case 'tictactoe':
        return <TicTacToe />;
      default:
        return <Calculator />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Mini Apps Collection
          </h1>
          <p className="text-gray-600">
            Three useful mini-applications in one place
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex justify-center">{renderContent()}</div>
        </div>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Built with React, TypeScript, Vite, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
