import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import wordList from '../containers/WordlistContainer';

class Wordlist extends Component {
  wordInput = React.createRef();

  handleClick = addWord => () => {
    if (this.wordInput.current.value) {
      addWord(this.wordInput.current.value);
      this.wordInput.current.value = '';
    }
  };

  render() {
    return (
      <Subscribe to={[wordList]}>
        {({ state: { words }, addWord, removeWord }) => (
          <div className="container">
            <h5>Banned Words</h5>
            <div className="wordlist">
              {words.map(word => (
                <Word key={word} word={word} removeWord={removeWord} />
              ))}
            </div>
            <div className="input-group words-form">
              <input
                type="text"
                ref={this.wordInput}
                className="form-input word-input"
                name="word"
              />
              <button
                className="btn btn-primary add"
                onClick={this.handleClick(addWord)}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

const Word = ({ word, removeWord }) => (
  <span className="chip word">
    {word}
    <button
      href="#"
      className="btn btn-clear"
      aria-label="Remove"
      onClick={removeWord(word)}
    />
  </span>
);

export default Wordlist;
