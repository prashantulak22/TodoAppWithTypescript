import  { useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';

const RegisterForm = () => {
      const [email, setEmail] = useState<string>("");
      const [password, setPassword] = useState<string>("");
      let history = useHistory();
      const postUserInfo = () => {
            axios.post(`https://614a90aa07549f001755a94e.mockapi.io/users`, {
                  email,
                  password
            }).then(() => {
                  history.push("/login")
            })
            .then(() => alert("User Added Successfully"))
      }


      return (
            <div>
                  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                              <Header as='h2' color='black' textAlign='center'>
                                    Register
                              </Header>
                              <br />
                              <Form size='large' onSubmit={postUserInfo}>
                                    <Segment stacked>
                                          {/* <Form.Input placeholder='Name' onChange={(e) => setName(e.target.value)} /> */}

                                          <Form.Input placeholder='E-mail address'  type= "email" onChange={(e) => setEmail(e.target.value)} required/>
                                          <Form.Input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}  required/>

                                          <Button color='black' fluid size='large' >
                                                Sign Up
                                          </Button>
                                    </Segment>
                              </Form>
                              <Message>
                                    Already have an account? <Link to='/'>Log in</Link>
                              </Message>

                        </Grid.Column>
                  </Grid>

            </div>
      )
}

export default RegisterForm;
