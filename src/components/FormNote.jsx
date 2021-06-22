import React, { Component } from 'react'
import './FormNote.css'

export default class FormNote extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.content = "";
    this.content = "";
    this.categorie = "";
    this.categories = this.props.categories;
  }

  _submitCard() {
    this.props.createNote(this.title, this.content, this.categorie);
  }

  _handleCategorieSelected(event) {
    this.categorie = event.target.value;
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
        onSubmit={(event) => {
          event.preventDefault();
          this._submitCard()
        }}
      >
        <select
          name="categories"
          defaultValue=""
          onChange={(event) => this._handleCategorieSelected(event)}
        >
          <option hidden value="">Categoria</option>
          {this.categories.map((elem, index) => {
            return (
              <option
                value={elem}
                key={index}
              >{elem}</option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          onChange={(event) => this._handleTituloInput(event)}
        />
        <textarea
          placeholder="Escreva sua anotação"
          onChange={(event) => this._handleConteudoInput(event)}
        />
        <button className="submit-button">Criar nota</button>
      </form>
    )
  }
}