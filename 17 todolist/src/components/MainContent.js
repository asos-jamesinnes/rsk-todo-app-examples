import React from 'react'
import TodoItem from "./TodoItem"
import todoData from "./todoData"
import StateChange from './StateChange';
 

class MainContent extends React.Component{
    constructor(){
        super()
        this.state={
            todos: todoData
        }
         
    this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount(){
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => console.log(data))
    }
    handleChange(id){
         this.setState(prevState =>{
          const updatedTodos=prevState.todos.map(todo =>{
              if (todo.id === id){
                  todo.completed = !todo.completed
              }
              return todo
          })
          return{
              todo: updatedTodos
          }
         }

         )
    }

    render(){
        
       function  ClickMe(){
            //alert("You clicked me")
             
            document.getElementById('show').innerHTML = "count"
              
        }
        function  pickMe(){
            //alert("You clicked me")
            document.getElementById('pick').innerHTML = "You just placed mouse on a picture"
        }
        const firstName="Odeyale"
        const lastName="Kehinde"
        const todoItems=this.state.todos.map(item =><TodoItem  key={item.id} item={item} handleChange={this.handleChange}/>)
        return(

            <main>
              <center>
             <h1>TODO LIST</h1>
             <img  onMouseOver={pickMe} src="https://www.fillmurray.com/200/100" alt=""></img><br />
             <div id="pick" style={{color: "blue"}}></div><br />
             <button onClick={ClickMe}>Click Me</button>
               <div id="show" style={{color: "blue"}}></div>
                     <p style={{color: "red"}}>Welcome to Todo List App {firstName +' '+lastName}</p>
                     <StateChange />
                      <div className="todo-list">
                     
                    {todoItems }
                   
                  </div>
                  </center>
                    </main>
        )
    }
}



// function MainContent(){
//     const firstName="Odeyale"
//     const lastName="Kehinde"
//     const todoItems=todoData.map(item =><TodoItem  key={item.id} item={item}/>)
//     return(
// <main>
// <center>
// <h1>TODO LIST</h1>
//         <p style={{color: "red"}}>Welcome to Todo List App {firstName +' '+lastName}</p>
//         <div className="todo-list">
//        {todoItems }
        
//        </div>
//       </center>
//        </main>
//     )
// }
export default MainContent;