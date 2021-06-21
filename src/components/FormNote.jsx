import React, { Component } from 'react'
import './FormNote.css'

export default class FormNote extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.content = "";
  }

  _submitCard(event) {
    event.preventDefault();
    this.props.createNote(this.title, this.content);
  }

  _handleTituloInput(event) {
    this.title = event.target.value;
  }

  _handleConteudoInput(event) {
    this.content = event.target.value;
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => this._submitCard(event)}
      >
        <input
          type="text"
          placeholder="Título"
          onChange={(event) => this._handleTituloInput(event)}
        />
        <textarea
          placeholder="Escreva sua anotação"
          onChange={(event) => this._handleConteudoInput(event)}
        />
        <button>Criar nota</button>
      </form>
    )
  }
}