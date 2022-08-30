import React, { useEffect, useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Users } from "../Model";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/actions/Actions';



const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [usersData, setUsersData] = useState<Users[]>([]);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [error, setError] = useState("");


  useEffect(() => {
    axios.get(`https://614a90aa07549f001755a94e.mockapi.io/users`)
      .then((response) => {
        setUsersData(response.data);
      })
  }, []);


  const login = () => {
    const filteredUser = usersData.find(data => (data.email === userEmail && data.password === userPassword))
    if (filteredUser) {
      dispatch(logIn(filteredUser));
      localStorage.setItem("user", JSON.stringify(filteredUser))
      history.push("/")
    } else {
      setError("Credentials error")
    }
  }


  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          Log-in to your account
        </Header>
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
        <Form size='large' onSubmit={login} >
          <Segment stacked>
            <Form.Input type="email" fluid icon='user' iconPosition='left' placeholder='E-mail address'
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <Button color='black' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to='/register'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm;
