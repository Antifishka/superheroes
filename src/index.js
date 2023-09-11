import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from 'globalStyles/theme';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HelmetProvider } from 'react-helmet-async';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </HelmetProvider>  
    </HashRouter>
  </React.StrictMode>
);

