import React from 'react';

import renderHTML from 'react-render-html';

import { css } from 'aphrodite';
import { previewWindow } from './styles/main';

import { connect } from 'react-redux';

const marked = window.marked;
marked.setOptions({ breaks: true });

const MarkdownPreviewWindow = props => {
	return (
		<div className={css(previewWindow.grid)}>
			<div id="preview">{renderHTML(marked(props.markdownText))}</div>
		</div>
	);
};

const MapStateToProps = state => ({
	markdownText: state.markdownText
});

export default connect(MapStateToProps)(MarkdownPreviewWindow);
