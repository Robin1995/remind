import { Provider } from 'react-redux';
import './assets/styles/App.scss';
import { store } from './store/reducers';
import DisplayMessages from './components/mesages/DisplayMessages';
function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <header className="App-header">
          <h1>Learn Remember</h1>
        </header>
        <section>
          <DisplayMessages />
        </section>
      </div>
    </Provider>
  );
}

export default App;
