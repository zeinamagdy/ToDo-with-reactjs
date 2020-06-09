import * as actions from '../actions/actionTypes'

const intialState = {
    tasks: {},
    loading: false
}

const tasksReducer = (state = intialState, action) => {
    switch (action.type) {
        case actions.START_REQUEST:
            return { ...state, loading: true }
        case actions.GET_ALL_TASKS:
            return { ...state, tasks: { ...state.tasks, ...action.tasks }, loading: false }
        case actions.ADD_TASK:
            const newtask = {}
            newtask[action.taskId] = action.task
            return { ...state, tasks: {...state.tasks,...newtask}, loading: false }
        case actions.DELETE_TASK:
            return { ...state, tasks: Object.values(state.tasks).filter(t => t !== action.task) }
        default:
            return intialState
    }
}

export default tasksReducer