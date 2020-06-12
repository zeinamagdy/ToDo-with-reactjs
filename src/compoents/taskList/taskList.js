import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Task from '../task/task'
import { fetchTasks } from '../../store/actions'

import classes from './tasksList.module.css'
const TaskList = props => {
    const { getTasks } = props
    useEffect(() => {
        getTasks()
    }, [getTasks])

    let tasksItems = 'loading...'

    console.log('tasks before', Object.values(props.tasks))
    if (!props.loading)
        tasksItems = Object.values(props.tasks).map((task, i) => {
            console.log('looping', task)
            return <li key={i}>
                <Task task={task} />
            </li>
        })
    console.log('items', tasksItems)
    return (
        <ul className={classes.taskList}>
            {tasksItems}
        </ul>)

}
const stateMapToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        loading: state.tasksReducer.loading
    }
}
const dispatchMapToProps = dispatch => {
    return {
        getTasks: () => dispatch(fetchTasks())
    }
}
export default connect(stateMapToProps, dispatchMapToProps)(TaskList)