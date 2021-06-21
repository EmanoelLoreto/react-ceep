import React, { Component } from 'react';
import './CardNote.css'

export default class CardNote extends Component {
  render() {
    return (
      <div className="card">
        <div className="header-card">
          <h3>{this.props.data.title}</h3>
        </div>
        <div className="content-card">
          <p>{this.props.data.content}</p>
        </div>
      </div>      
    );
  }
}
