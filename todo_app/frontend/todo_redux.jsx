import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});

// Remove later
const store = configureStore;
window.store = store;