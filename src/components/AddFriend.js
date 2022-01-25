import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddFriend = () => {
  const[newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setNewFriend((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  const submit = e => {
    e.preventDefault();
    axiosWithAuth().post('/api/friends', newFriend)
      .then(resp => {
        console.log(resp)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="add-container">
      <Form onSubmit={submit}>
        <h2>Add Friend</h2>
        <Form.Group className="mb-3">
          <Form.Label>Friend Name</Form.Label>
          <Form.Control name="name" value={newFriend.name} onChange={handleChange} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Friend Age</Form.Label>
          <Form.Control name="age" value={newFriend.age} onChange={handleChange} type="text" placeholder="Enter Age" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" value={newFriend.email} onChange={handleChange} type="email" placeholder="Enter Email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddFriend;