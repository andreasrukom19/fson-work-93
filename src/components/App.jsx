import { Component } from "react";
import {AddProfileForm} from "./AddProfileForm/AddProfileForm";

export class App extends Component {
  handleAddProfile = (formData) => {
    console.log('FormData:', formData);
    const finaleProfile = { ...formData, id: Math.random().toString() }
    console.log(finaleProfile);
  }

  render() {
    return (
    <>
        <AddProfileForm handleAddProfile={ this.handleAddProfile } />
    </>
    )
  };
};
