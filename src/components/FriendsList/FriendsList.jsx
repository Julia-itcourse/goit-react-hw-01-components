import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';


const FriendListItem = (props) =>{
    const {avatar, name, isOnline} = props.friendProp;
 
return (
 <>
  <span className={isOnline  ? styles.onLine : styles.offLine }>{isOnline}</span>
  <img className={styles.avatar} src= {avatar} alt= {name} width="48" />
<p className={styles.name}>{name}</p>
</>
)
}

const FriendsList = (props) =>{
    const {friends} = props;
    
return (
 <ul className={styles.friendList} >
     
     {friends.map((friend) => <li className={styles.item} key = {friend.id}> <FriendListItem friendProp = {friend} titlePtop="title"/> </li>)}
     
</ul>
)
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default FriendsList;