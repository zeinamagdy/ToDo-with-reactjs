import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import Task from '../task/task'
import Spinner from '../UI/spinner/spinner'
import { fetchTasks } from '../../store/actions'


import classes from './tasksList.module.css'
const TaskList = props => {
    const { getTasks } = props
    useEffect(() => {
        getTasks()
    }, [getTasks])

    let tasksItems = <Spinner />
    let doneTasks = <Spinner />
    const getTasksList = (type) => {
        if (type === 'todo')
            return Object.values(props.tasks).filter(task =>
                task.status === 'new'
            ).map((task, i) => {
                return <li key={i}>
                    <Task task={task} />
                </li>
            })
        else if (type === 'done')
            return Object.values(props.tasks).filter(task =>
                task.status === 'done'
            ).map((task, i) => {
                return <li key={i}>
                    <Task task={task} />
                </li>
            })
    }

    console.log('spinner', props.tasks)
    if (!props.loading && props.tasks) {
        console.log('loading', props.loading)
        tasksItems = getTasksList('todo')
        doneTasks = getTasksList('done')
    }


    return (
        <Fragment>
            {!props.loading ?
                <div>
                    <h1>Todo tasks</h1>
                    <ul className={classes.taskList}>
                        {tasksItems}
                    </ul>
                    <h1>Done</h1>
                    <ul className={classes.taskList}>
                        {doneTasks}
                    </ul>
                </div>
                :
                <Spinner />
            }
        </Fragment>)


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