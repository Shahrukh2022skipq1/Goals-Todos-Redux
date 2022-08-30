import { handleAddGoal, handleDeleteGoal } from "../actions/goals"
import { useRef } from "react"
import List from "./List"
import { connect } from "react-redux"

const Goals = (props) => {
    const inputRef = useRef();
    const additem = (e) => {
        e.preventDefault();
        props.dispatch(handleAddGoal(inputRef.current.value, () => (inputRef.current.value = "")))

    }
    const removeItem = (goal) => {
        props.dispatch(handleDeleteGoal(goal))
    }

    return (
        <div>
            <h1>Goals</h1>
            <input type="text" placeholder="Add Goal" ref={inputRef} />
            <button onClick={additem}>Add Goal</button>
            <List remove={removeItem} items={props.goals} />
        </div>
    )
}
export default connect((state) => ({
    goals: state.goals
}))(Goals)