import React from 'react';
import PropTypes from 'prop-types';
import '../../sharedStyles/global.css'
import styles from './Profile.module.css';



const Profile = ({name, tag, location, avatar, stats}) => {
    return (
        <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt={name}
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className = {styles.item}>
      <span className={styles.label}>Followers</span>
    <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className = {styles.item}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className = {styles.item}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}


Profile.defaultProps = {
avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
};



Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired
}

//?почему такая запись неправильная? TransactionsHistory с arrayOf работает
// stats: PropTypes.objectOf(PropTypes.shape({

//   followers:PropTypes.number.isRequired,
//   likes:PropTypes.number.isRequired,
//   views:PropTypes.number.isRequired
// })).isRequired

export default Profile;

