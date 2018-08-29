import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Calcite React
import { ThemeProvider } from 'styled-components';
import CalciteTheme from 'calcite-react/theme/CalciteTheme';

ReactDOM.render(
  <ThemeProvider theme={CalciteTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
