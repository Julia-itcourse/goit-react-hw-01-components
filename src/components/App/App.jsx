import React from 'react'
import '../../sharedStyles/global.css'
import Profile from '../Profile'
import user from '../../database/user.json'
import statData from '../../database/statistical-data.json'
import Statistics from '../Statistics'
import FriendsList from '../FriendsList'
import friends from '../../database/friends.json'
import TransactionsHistory from '../TransactionsHistory'
import transactions from '../../database/transaction.json'


const App = () => {
    return (
    <>

    <Profile
     name={user.name}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
    />

    <Statistics
     title="Upload stats"
     stats={statData}
    />

    <FriendsList
    friends={friends}
    />

<TransactionsHistory 
items={transactions}/>
    </>
    )

}


export default App