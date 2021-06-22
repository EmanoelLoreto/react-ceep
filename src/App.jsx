import React, { Component } from "react";
import FormNotes from './components/FormNote.jsx'
import ListOfNotes from './components/ListOfNotes.jsx'

export default class App extends Component {

  constructor() {
    super();
    this.cards = [];
    this.categories = ['Home', 'Work', 'School']
    this.state = {};
  }

  createNote(title, content, categorie) {
    if (
      title !== ''
        && content !== ''
        && categorie !== ''
    ) {
      this.cards.push({
        title: title,
        content: content,
        categorie: categorie,
      })
      this.setState({
        cards: this.cards
      })
    } else {
      alert('Preencha todos os campos!');
    }
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
        <FormNotes
          createNote={(title, content, categorie) => {
            this.createNote(title, content, categorie)
          }}
          categories={this.categories}
        />
        <hr />
        <ListOfNotes cards={this.cards} deleteNote={(event) => this.deleteNote(event)} />
      </>
    );
  }
}
