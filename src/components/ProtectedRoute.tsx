import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Switch } from 'react-router-dom';


interface ProtectedRouteProps extends RouteProps {
      component: React.ComponentType<RouteProps>,
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
      const isLogged = useSelector((state: RootStateOrAny) => state.authReducer.isLogged)
      return (
            <Switch>
                  <Route {...rest} render={(props) => {
                        if (isLogged) {
                              return <Component {...rest} {...props} />;
                        }
                        else {
                              return (
                                    <Redirect to={{ pathname: "/login", state: { from: props.location, }, }} />);
                        }
                  }
                  }
                  />
            </Switch>

      )
}

export default ProtectedRoute
