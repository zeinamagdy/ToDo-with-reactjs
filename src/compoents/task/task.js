import React from 'react'
import { connect } from 'react-redux'
import classes from './tasks.module.css'
import { deleteTask, updateTaskStatus } from '../../store/actions'

const Task = props => {
    const getTaskId = (task) => {
        return Object.keys(props.tasks).find(k => props.tasks[k] === task)
    }
    const deleteTaskHandler = (task) => {
        const id = getTaskId(task)
        props.removeTask(id, task)

    }
    const changeStatus = (task) => {
        const id = getTaskId(task)
        const newTask = { ...task, status: 'done' }
        props.updateTaskStaus(id, newTask)

    }
    return (
        <div style={{ marginBottom: '1rem' }}>
            <div className={classes.card}>
                {props.task.status === 'done' ?
                    <span><del>{props.task.title}</del></span>
                    :
                    <span>{props.task.title}</span>}
                <span>
                    <span
                        className="material-icons icon"
                        onClick={() => deleteTaskHandler(props.task)}>
                        delete
                    </span>
                    {props.task.status !== 'done' ?
                        <span
                            className="material-icons icon"
                            onClick={() => changeStatus(props.task)}>
                            done
                    </span> : null}
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
        removeTask: (id, task) => dispatch(deleteTask(id, task)),
        updateTaskStaus: (id, task) => dispatch(updateTaskStatus(id, task))
    }

}

export default connect(stateMapToProps, dispatchMapToProps)(Task);