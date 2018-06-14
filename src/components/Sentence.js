import React from 'react';
import { Subscribe } from 'unstated';

import wordList from '../containers/WordlistContainer';
import SentenceContainer from '../containers/SentenceContainer';

const Sentence = () => (
	<Subscribe to={[wordList, SentenceContainer]}>
		{(
			{ state: { words } },
			{ state: { filteredSentence }, filterSentence },
		) => (
			<div className="container">
				<h5>Filtered Sentence</h5>
				<pre className="code filtered-sentence">{filteredSentence}</pre>
				<div className="form sentence-form">
					<input
						className="form-input"
						onChange={filterSentence(words)}
						type="text"
						name="sentence"
						placeholder="Enter sentence here..."
					/>
				</div>
			</div>
		)}
	</Subscribe>
);

export default Sentence;
