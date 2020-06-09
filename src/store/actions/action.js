import * as actions from './actionTypes'
import axios from '../../axios'


export const StartRequest = () => {
    return {
        type: actions.START_REQUEST
    }
}
export const fetchTasksSuccess = (tasksData) => {
    return {
        type: actions.GET_ALL_TASKS,
        tasks: tasksData
    }
}
export const addTaskSuccess = (id, task) => {
    return {
        type: actions.ADD_TASK,
        taskId: id,
        task: task
    }
}
export const deleteTaskSuccess = (id, task) => {
    return {
        type: actions.DELETE_TASK,
        taskId: id,
        task: task
    }
}
export const fetchTasks = () => {
    return dispatch => {
        axios.get('/tasks.json').then(response => {
            console.log('data', response.data)
            dispatch(fetchTasksSuccess(response.data))
        }).catch(error => {
            console.log('error', error)
        })
    }
}

export const AddTask = (task) => {
    return dispatch => {
        axios.post('/tasks.json', task)
            .then(response => {
                dispatch(addTaskSuccess(response.data.name, task))
            }).catch((error => {
                console.log('error', error)
            }))
    }
}

export const deleteTask = (id, task) => {
    return dispatch => {
        axios.delete('/tasks/' + id + '.json')
            .then(response => {
                dispatch(deleteTaskSuccess(id, task))
            }).catch((error => {
                console.log('error', error)
            }))
    }
}

export const updateTaskStatus = (id, task) => {
    return dispatch => {
        axios.put('/tasks/' + id + '.json', task)
            .then(response => {
                console.log(response)
            })
    }

}