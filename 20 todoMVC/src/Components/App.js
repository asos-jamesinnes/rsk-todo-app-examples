import React from 'react';
import VisibleTodolist from '../Containers/VisibilityTodolist';
import InfoTodobar from '../Containers/InfoTodobar';
import InfoListbar from '../Containers/InfoListbar';
import InfoAppbar from '../Containers/InfoAppbar';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <InfoAppbar />
        <InfoTodobar />
        <VisibleTodolist />
        <InfoListbar />
      </div>
    )
  }
}

