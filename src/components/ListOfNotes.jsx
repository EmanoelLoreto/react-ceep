import React, { Component } from 'react';
import CardNote from './CardNote.jsx';
import './ListOfNotes.css'

export default class ListOfNotes extends Component {
  render() {
    return (
      <div className="list-cards">
        {this.props.cards.map((card, index) => {
          return (
            <CardNote data={card} key={index}/>
          );
        })}
      </div>
    )
  }
}
