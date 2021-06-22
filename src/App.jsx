import React, { Component } from "react";
import FormNotes from './components/FormNote.jsx'
import ListOfNotes from './components/ListOfNotes.jsx'

export default class App extends Component {

  constructor() {
    super();
    this.cards = [];
    this.state = {};
  }

  createNote(title, content) {
    this.cards.push({
      title: title,
      content: content,
    })
    this.setState({
      cards: this.cards
    })
  }

  deleteNote(index) {
    this.cards.splice(index, 1);
    this.setState({
      cards: this.cards
    })
  }

  render() {
    return (
      <>
        <FormNotes createNote={(title, content) => this.createNote(title, content)} />
        <hr />
        <ListOfNotes cards={this.cards} deleteNote={(event) => this.deleteNote(event)} />
      </>
    );
  }
}
