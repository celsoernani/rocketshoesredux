import React from 'react';
import GlobalStyle from './styles/styles/global';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
