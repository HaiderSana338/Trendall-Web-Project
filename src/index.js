import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';// Import store và persistor từ Redux/store
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate

export const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
};
export const scrollToTop70 = () => {
  window.scrollTo({
      top: 0,
      left:0,
      behavior: 'smooth'
  });
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Bọc App trong PersistGate */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
