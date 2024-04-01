import logo from './hti-logo500.png';
import './App.css';
import CounterApp from './component/CounterApp';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store={store}>
        <CounterApp />
        </Provider>
      </header>
    </div>
  );
}

export default App;
