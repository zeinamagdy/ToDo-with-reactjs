import React from 'react'
import { connect } from 'react-redux'
import classes from './tasks.module.css'
import { deleteTask } from '../../store/actions'

const Task = props => {
    const deleteTaskHandler = (task) => {
        console.log('del', task)
        const id = Object.keys(props.tasks).find(k => props.tasks[k] === task)
        console.log('id', id)
        props.removeTask(id, task)

    }
    return (
        <div style={{ marginBottom: '1rem' }}>
            <div className={classes.card}>
                <h2>{props.task.title}</h2>
                <p><span>{props.task.status}</span>{props.task.description}</p>
                <span>
                    <button onClick={() => deleteTaskHandler(props.task)}>delete</button>
                    <button onClick={props.onDone}>done</button>
                </span>
            </div>
        </div>
    )

}
const stateMapToProps = state => {
    return {
        tasks: state.tasksReducer.tasks
    }
}
const dispatchMapToProps = dispatch => {
    return {
        removeTask: (id, task) => dispatch(deleteTask(id, task))
    }

}

export default connect(stateMapToProps, dispatchMapToProps)(Task);