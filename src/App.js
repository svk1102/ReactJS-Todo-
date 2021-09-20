import { useState ,useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

// ------------------LOCAL Storage -----------------
  const getLocalTodos = () => {
    var localTodos = localStorage.getItem("myTodo")

    if(localTodos){
      return JSON.parse(localStorage.getItem("myTodo"))
    }
    else{
      return []
    }
  }

  
  const [input,setInput] = useState("")
  const [todos,setTodos] = useState(getLocalTodos())
  const [checkStatus,setCheckStatus] = useState("all")
  const [filterTodos,setFilterTodos] = useState([])


  useEffect(() => {
    filterHandler()
  },[checkStatus,todos])

  useEffect( ()=> {
    localStorage.setItem("myTodo",JSON.stringify(todos))
  },[todos])
  

  

  const filterHandler = () => {
    switch(checkStatus) {
      case "completed" : 
        setFilterTodos(todos.filter((todo) =>  todo.status === true ))
        break
      case "uncompleted" : 
        setFilterTodos(todos.filter((todo) =>  todo.status === false ))
        break
     default : setFilterTodos(todos)
        break
    }
  }

  return (
    <div className="App">
      <div className="display-5 d-flex justify-content-center"><span className="mt-3">My To-Do list</span></div>
      <Form setInputText = {setInput} inputText={input} todos={todos} setTodos={setTodos} setCheckStatus={setCheckStatus} />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
