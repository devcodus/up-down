import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import UpDown from './components/up-down-component/UpDownComponent';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './js/index';

import logo from './logo.svg';
import './App.css';
// import React, { Component } from 'react';
// import App from './App';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/Index.js</code> and save to reload.
          </p>
          <UpDown />
        </div>
      </Provider>
    );
  }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// export const store = configureStore({});
