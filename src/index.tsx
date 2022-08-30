import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import MainPage from './MainPage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor ={persistor}>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

