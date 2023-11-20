import './App.css';
import Header from './components/Header';
import Pomodoro from './pages/Pomodoro';
import Todo from './pages/Todo';

function App() {
  return (
    <div className='border-2 border-blue-500 rounded-lg p-4'>
      <Header />
      <div className='flex '>
        <Pomodoro />
        <Todo />
      </div>
    </div>
  );
}

export default App;
