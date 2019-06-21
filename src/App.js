import React from "react";
import "./App.css";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import { MDHandleChange } from "./redux/markdownActions";

import { Header, Grid, Form, TextArea } from "semantic-ui-react";

const marked = window.marked;

function App(props) {
  return (
    <div>
      <Grid columns="two">
        <Grid.Column>
          <Header as="h1">Markdown</Header>
          <Form>
            <TextArea
              rows="30"
              onChange={event => props.dispatch(MDHandleChange(event))}
              value={props.markdownText}
            />
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Header as="h1">Preview</Header>
          <Form>
            <TextArea rows="30" value={marked(props.markdownText)} />
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}

const MapStateToProps = state => ({
  markdownText: state.markdownText
});

export default connect(MapStateToProps)(App);
