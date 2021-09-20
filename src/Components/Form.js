import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button ,InputGroup , FormControl} from 'react-bootstrap'
import {BsPlus} from 'react-icons/bs'

function Form({setInputText,setTodos,inputText,todos , setCheckStatus}) {

    

    const inputHandler = (event) => {
        // console.log(event.target.value)
        setInputText(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        // console.log("Click")
        setTodos([...todos , {id : Math.random() * 10000000000000 , text : inputText , status : false }])
        setInputText("")
    }
    const statusHandler = (event) => {
        setCheckStatus(event.target.value)
    }

    return (
        <div className="d-sm-flex justify-content-center align-items-center m-5">
            <form action=""className="d-sm-flex justify-content-center align-items-center" >
                <InputGroup className="">
                <FormControl placeholder="Enter Todo" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={inputHandler} value={inputText} />
                <Button variant="outline-secondary" id="button-addon2" type="submit" onClick={submitHandler}>Add Todo</Button>
                </InputGroup>
            </form>
            <div className="select">
                <select name="todos" onChange={statusHandler} className="filter-todos p-2 m-5 bg-light d-sm-flex justify-content-center align-items-center">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            
        </div>
    )
}

export default Form
