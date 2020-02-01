import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import InfoSignUp from '../Containers/InfoSignUp';
import InfoSignIn from '../Containers/InfoSignIn';
import InfoChangeUser from '../Containers/InfoChangeUser';
import InfoChangePassword from '../Containers/InfoChangePassword';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path='/' exact component={App} />
      <Route path='/SHOW_ALL'  component={App} />
      <Route path='/SHOW_ACTIVE' component={App} />
      <Route path='/SHOW_COMPLETED' component={App} />
      <Route path='/sign-up' component={InfoSignUp} />
      <Route path='/sign-in' component={InfoSignIn} />
      <Route path='/Change_User_Profile' component={InfoChangeUser} />
      <Route path='/Change_Password' component={InfoChangePassword} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;