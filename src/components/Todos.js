import { handleAddTodo, handleDeleteTodo, handleToggle } from "../actions/todos"
import { useRef } from "react"
import List from "./List"
import { connect } from "react-redux"
const Todos = (props) => {
    const inputRef = useRef();
    const additem = (e) => {
        e.preventDefault();
        props.dispatch(handleAddTodo(inputRef.current.value, () => inputRef.current.calue = ""))
    }

    const removeItem = (todo) => {
        props.dispatch(handleDeleteTodo(todo))
    }
    const toggleItem = (id) => {
        props.dispatch(handleToggle(id))

    }
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add Todo" ref={inputRef} />
            <button onClick={additem}>Add Todo</button>
            <List toggle={toggleItem} remove={removeItem} items={props.todos} />
        </div>
    )
}

export default connect((state) => ({
    todos: state.todos
}))(Todos)