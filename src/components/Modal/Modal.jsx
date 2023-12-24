import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {

  render() {
    const { name, age, isFavourite, } = this.props.modalData;
    return (
      <div className={css.backdrop}>
        <div className={css.modal}>
          <h2 className={css['modal-title']}>Profile Details</h2>
          <p>Profile name: {name }</p>
          <p>Profileage: {age }</p>
          <p>Is profile favourite?: {isFavourite ? '💖' : '☹️'}</p>
          <button onClick={this.props.handleCloseModal} className={css['close-btn']} type="button">&times;</button>
        </div>
      </div>
    )
  }
}
