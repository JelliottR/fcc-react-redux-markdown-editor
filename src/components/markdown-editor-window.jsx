import React from 'react';

import { MDHandleChange } from '../redux/markdownActions';
import { Form, TextArea } from 'semantic-ui-react';

import { css } from 'aphrodite';
import { editorWindow } from './styles/main';

import { connect } from 'react-redux';

const MarkdownEditorWindow = props => {
	return (
		<Form className={css(editorWindow.grid)}>
			<TextArea
				id="editor"
				className={css(editorWindow.textArea)}
				onChange={event => props.dispatch(MDHandleChange(event))}
				value={props.markdownText}
			/>
		</Form>
	);
};

const MapStateToProps = state => ({
	markdownText: state.markdownText
});

export default connect(MapStateToProps)(MarkdownEditorWindow);
