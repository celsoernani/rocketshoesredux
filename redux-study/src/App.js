import React from 'react';
import GlobalStyle from './styles/styles/global';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
