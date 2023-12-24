import React, { Component } from 'react'
import css from './AddProfileForm.module.css'
import cn from 'classnames'

export class AddProfileForm extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const elems = form.elements;

    const name = elems.profileName.value;
    const age = elems.profileAge.value;
    const isFavourite = elems.profileFavourite.checked;

    const formData = {
      name,
      age: Number(age),
      isFavourite
    }

    this.props.handleAddProfile(formData);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className={css.form} onSubmit={this.handleFormSubmit}>
        <h2>Add Profile</h2>
        <label className={css['form-label']}>
          <span className={css['form-label-text']}>Name:</span>
          <input className={css['form-input']} type="text" name='profileName' placeholder='Enter your name' required />
        </label>
        <label className={css['form-label']}>
          <span className={css['form-label-text']}>Age:</span>
          <input className={css['form-input']} type="number" name='profileAge' required />
        </label>
        <label className={cn(css['form-label'], css['form-label-checkbox'])}>
          <span className={css['form-label-text']}>Is contact favourite:</span>
          <input className={css['form-input']} type="checkbox" name='profileFavourite'/>
        </label>
        <button type='submit'>Add new profile</button>
      </form>
    )
  }
}
