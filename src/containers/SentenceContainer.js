import { Container } from 'unstated';

class SentenceContainer extends Container {
	state = {
		filteredSentence: '',
	};

	filterSentence = wordlist => e => {
		const filteredSentence = e.target.value
			.trim()
			.split(' ')
			.map(word => {
				if (wordlist.includes(word.toLowerCase())) {
					return '*'.repeat(word.length);
				}
				return word;
			})
			.join(' ');

		this.setState({ filteredSentence });
	};
}

export default SentenceContainer;
