import React, { Component } from "react";
import FormGrade from './components/FormNote.jsx'
import ListOfGrades from './components/ListOfNotes.jsx'

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

  render() {
    return (
      <>
        <FormGrade createNote={(title, content) => this.createNote(title, content)} />
        <ListOfGrades cards={this.cards} />
      </>
    );
  }
}
