import React from 'react'
import {Button,Card} from 'react-bootstrap'
import { BsTrash , BsCheckCircle } from "react-icons/bs";
    

function Todo({text,todos,setTodos,todo}) {

    const DeleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const CompleteHandler = () => {
        setTodos(todos.map((el) => {
            if(el.id ===todo.id){
                return {...el, status:!todo.status}
            }else{
                return el
            }
        }))
    }
    
    return (
        <div>
            <Card className="text-center m-5">
            <Card.Header>{todo.status ? "Completed" : "Ongoing"}</Card.Header>
            <Card.Body className={`${todo.status ? "todoCompleted" : ""} text-center `}>
                <Card.Title className="display-6">{text}</Card.Title>
            <Button variant="danger" className="m-4" onClick={DeleteHandler}>Remove<BsTrash></BsTrash></Button>
            <Button variant="outline-success" className="m-4" onClick={CompleteHandler}>Done<BsCheckCircle/></Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

export default Todo
