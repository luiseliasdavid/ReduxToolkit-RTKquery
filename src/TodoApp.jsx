import {useState} from 'react'
import { useGetTodosQuery, useGetTodoQuery } from './store/apis/todosApi'

export const TodoApp = () => {

  /* const {data: todos = [] , isLoading} =  useGetTodosQuery(); */
  const [todoId , setTodoId] = useState(1)
  //estas peticiones quedan guardadas en cache durante unos minutos
  const {data: todo = [] , isLoading} =  useGetTodoQuery(todoId);
  
  console.log(todo)
  

  return (
    <>
    <h1> TodoApp</h1>
    <hr/>

    <h4> isLoading: {isLoading? 'true' : 'false'}  </h4>

    <pre>...</pre>

   {/*  <ul>
        {todos.map( (todo) => <li key={todo.id} >{todo.title} </li>)}
    </ul>
 */}
    <p> {todo.title} </p>
    
    <button onClick={ ()=> setTodoId(todoId +1)  }>
        Next Todo
    </button>
    <button  onClick={ ()=> { if (todoId >0)setTodoId(todoId -1)} } >
        Prev Todo
    </button>
    
    
    </>
  )
}
