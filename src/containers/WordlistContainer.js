import { Container } from 'unstated';

class WordlistContainer extends Container {
  constructor(...words) {
    super();
    this.state = {
      words: words,
    };
  }

  addWord = word => {
    const wordToAdd = word.toLowerCase();
    this.setState(({ words }) => {
      if (!words.includes(wordToAdd)) {
        const newWords = [...words, wordToAdd];
        return { words: newWords };
      } else {
        return null;
      }
    });
  };

  removeWord = word => () => {
    this.setState(({ words }) => {
      if (words.includes(word)) {
        const wordIndex = words.findIndex(w => w === word);
        const newWords = [
          ...words.slice(0, wordIndex),
          ...words.slice(wordIndex + 1),
        ];
        return { words: newWords };
      } else {
        return null;
      }
    });
  };
}

let wordList = new WordlistContainer('shit', 'damn');

export default wordList;
