import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';

import Sentence from './components/Sentence';
import Wordlist from './components/Wordlist';

import './styles.css';

function App() {
  return (
    <div className="app">
      <h1>Unstated Language Filter</h1>
      <Sentence />
      <div className="divider" />
      <Wordlist />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement,
);
