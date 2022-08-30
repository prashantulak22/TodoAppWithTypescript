import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterForm from './components/RegisterForm';



const MainPage = () => {
      return (
            <Router>
                  <Switch>
                        <Route exact path="/login" component={LoginForm} />
                        <ProtectedRoute exact path="/" component={App} />
                        <Route exact path="/register" component={RegisterForm} />
                  </Switch>
            </Router>
      )
}

export default MainPage
