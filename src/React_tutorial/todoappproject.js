import React, {useState} from 'react'
Let  globalID = 0
function  App(){
  const [Task, setTask] = useState ("")
  const [todos, setTodos] = useState([ ])
  
  function createTodo(event){
    event.preventDefault()
    setTodo (oldTodo =>
    setTask(''){return [...oldTodo, {todo: Task id: globalID++}]}) 
  }
  function deleteItem(itemId){
    setTodo(oldTodo => oldTodo.filter(item => item.id !== itemId))
  }
  
    return <div>
          <h1>Best Todo App Ever</h1>
          <form onSubmint = {createTodo} >
            <input Type="text" value={task}>
            
            <button onClick = {createTodo} onChange = {event => 
              setTask (event.target.value)}>Create Todo </button> 
          </input>
          </form>
            <ul>
            {todos.map((item, index) =>                              
            { return 
            <div key={item.id}>
            <li>{item.todo} ({item.id})</li>
            <button onClick = {() => deleteItem(item.id) }>Delete</button>
            </div>})}   
            </ul>
        </div>
  
}

