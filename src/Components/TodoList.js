import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos,filterTodos}) {

    return (
        <div>
            <div className="todo-container">
                {
                    filterTodos.map((todo) => {
                        return(
                        <Todo todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} todo={todo}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoList
