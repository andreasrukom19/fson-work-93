import { Profile } from 'components/Profile/Profile';
import React from 'react';
import css from './FriendsList.module.css';

const FriendsList = ({friends, title="", handlePrintProfileName, handleDeleteProfile, handleShowDetails}) => {
  return (
    <div className={css.list}>
      {title.length > 0 && <h2>{ title }</h2>}
      {friends.map(friend => {
          return (
            <Profile
              key={friend.id}
              id={friend.id}
              name={friend.name}
              age={friend.age}
              isFavourite={friend.isFavourite}
              handlePrintProfileName={handlePrintProfileName}
              handleDeleteProfile={handleDeleteProfile}
              handleShowDetails={handleShowDetails}
            />)
        })}
    </div>
  )
}

export { FriendsList };