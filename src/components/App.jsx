import { Component } from "react";
import { AddProfileForm } from "./AddProfileForm/AddProfileForm";
import { FriendsList } from "./FriendsList/FriendsList";
import { Modal } from "./Modal/Modal";

const friendsData = [
  {id: '1', name: 'Max', age: 21, isFavourite: false},
  {id: '2', name: 'John', age: 30, isFavourite: true},
  {id: '3', name: 'Katrin', age: 22, isFavourite: true},
  {id: '4', name: 'Joe', age: 18, isFavourite: false}
]

export class App extends Component {
  state = {
    friends: friendsData,
    filter: '',
    isOpenModal: false,
    modalData: null,
  }

  handleAddProfile = (formData) => {
    const hasDuplicates = this.state.friends.some(friend => friend.name === formData.name);
    if (hasDuplicates) {
      alert(`Profile with name ${formData.name} already exists!`);
      return;
    }
    const finaleProfile = { ...formData, id: Math.random().toString() }

    this.setState(prevState => {
      return {
        friends: [...prevState.friends, finaleProfile]
      }
    })
  }

  handlePrintProfileName = (profileName) => {
    console.log('profileName:', profileName);
  }

  handleDeleteProfile = profileId => {
    this.setState({friends: this.state.friends.filter(friend => friend.id !== profileId)})
  }

  handleChangeFilter = (event) => {
    const value = event.target.value;
    this.setState({ filter: value })
  }

  handleShowDetails = (profileId) => {
    const selectedProfile = this.state.friends.find(friend => friend.id === profileId);
    this.setState({
      isOpenModal: true,
      modalData: selectedProfile,
    })
  }

  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  }

  componentDidMount() {
    const stringifiedFriends = localStorage.getItem('friends');
    const friends = JSON.parse(stringifiedFriends) ?? [];
    this.setState({ friends });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.friends !== this.state.friends) {
      const stringifiedFriends = JSON.stringify(this.state.friends);
      localStorage.setItem('friends', stringifiedFriends);
    }

  }

  render() {
    const filteredProfiles = this.state.friends.filter(profile =>
      profile.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );

    const sortedFilteredProfiles = [...filteredProfiles].sort((a, b) => b.isFavourite - a.isFavourite);

    return (
    <div>
      <h1>Friends Book</h1>
        <AddProfileForm handleAddProfile={this.handleAddProfile} />
        <div>
          <p>Find Profile</p>
          <input
            onChange={this.handleChangeFilter}
            value={this.state.filter}
            type="text"
            name="keyword"
            placeholder="Enter name"
          />
        </div>
        <FriendsList
          friends={sortedFilteredProfiles}
          title="Friends List"
          handlePrintProfileName={this.handlePrintProfileName}
          handleDeleteProfile={this.handleDeleteProfile}
          handleShowDetails={this.handleShowDetails}
        />
        {this.state.isOpenModal && <Modal
          modalData={this.state.modalData}
          handleCloseModal={this.handleCloseModal}
        />}
    </div>
    )
  };
};
