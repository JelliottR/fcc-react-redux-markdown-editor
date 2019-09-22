import React from 'react';

import { css } from 'aphrodite';
import { s_App, heading } from './components/styles/main';

import MarkdownEditorWindow from './components/markdown-editor-window';
import MarkdownPreviewWindow from './components/markdown-preview-window';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
	return (
		<div className={css(s_App.grid)}>
			<p className={css(heading.text)}>Markdown Editor</p>
			<MarkdownEditorWindow />
			<MarkdownPreviewWindow />
		</div>
	);
};

export default App;
