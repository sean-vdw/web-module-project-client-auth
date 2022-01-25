import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/api/friends')
      .then(resp => {
        setFriends(resp.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      {friends.map(friend => {
        return (
          <div key={friend.id} className="friend-card">
            <h3>{friend.name}</h3>
            <p>{friend.age} years old</p>
            <p>Contact me: {friend.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default FriendsList;