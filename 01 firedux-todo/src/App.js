import React, {Component} from 'react';
import List from './components/List';
import "./styles/styles.css"

class App extends Component {
  render() {
    return (
      <div>
        <List className = "List"/>
      </div>
    );
  }
}
export default App;
