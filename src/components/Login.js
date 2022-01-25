import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

const Login = () => {
  const { push } = useHistory();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', credentials)
      .then(resp => {
        localStorage.setItem('token', resp.data.token);
        push('/friends');
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  return (
    <div className="container login-container">
      <Form onSubmit={login}>
        <h2>Log In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control name="username" value={credentials.username} onChange={handleChange} type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" value={credentials.password} onChange={handleChange} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login;