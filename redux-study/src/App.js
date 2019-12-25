import React from 'react';
import GlobalStyle from './styles/styles/global';
import Header from './components/Header';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';
import history from './services/history';
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
