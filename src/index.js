import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import catSlice from './redux/catSlice';
import watcherCat from './redux/catSaga';


const root = ReactDOM.createRoot(document.getElementById('root'));

const saga = createSagaMiddleware()

    const store = configureStore({
        reducer : {
          cat: catSlice
        }, 
        middleware : [saga]
    })

saga.run(watcherCat)

root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

