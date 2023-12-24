import css from './Profile.module.css';
import cn from 'classnames';

const Profile = ({
  name,
  age,
  id,
  isFavourite = false,
  className = '',
  handlePrintProfileName,
  handleDeleteProfile,
}) => {
  return (
    <p
      style={{backgroundColor: isFavourite ? 'blanchedalmond' : 'transparent'}}
      className={cn(css.friendProfile, className)}
    >
      {isFavourite && '💗'} Hello, <span className={css.accent}>{name}</span>. Your age is: {age}
      <button onClick={() => handlePrintProfileName(name)}>Print Name</button>
      <button onClick={() => handleDeleteProfile(id)}>&times;</button>
    </p>
  )
}

export { Profile };