import React from 'react';
import ReactDOM from 'react-dom/client'; // Update to import from 'react-dom/client'
import App from './App';
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '@atlaskit/css-reset';
import './Components/Modals/EditCardModal/Popovers/Date/DateRange.css';
import './index.css';

// Use createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
