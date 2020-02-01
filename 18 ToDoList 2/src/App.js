import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import TimerDetails from './components/UI/TimerDetails/TimerDetails';
import logo from './logo.svg';
import './App.scss';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {
    render() {
        const routes = (
            <Switch>
                <Route path="/timer/:itemId" component={TimerDetails} />
                <Route path="/" exact component={Home} />
                <Redirect to="/"/>
            </Switch>
        );

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                {routes}
            </div>
        );
    }
}

export default App;
