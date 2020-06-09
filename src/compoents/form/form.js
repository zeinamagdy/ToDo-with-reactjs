import React from 'react'
import * as classes from './form.module.css'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

const Form = props => {
    let task = '';
    const onFormSumbit = (event) => {
        event.preventDefault();
        console.log('added Task', task)
        props.addTask({ 'title': task, 'status': 'new' })

    }
    const AddTask = event => {
        task = event.target.value.trim();
    }
    return (
        <form onSubmit={onFormSumbit}>
            <input
                type='text' className={classes.task}
                placeholder='What needs to be done?'
                maxLength='64' required autoComplete='off'
                onChange={(e) => AddTask(e)}

            />
            <button onClick={onFormSumbit} type='submit'>Add</button>
        </form>
    )

}
const dispatchMapToProps = dispatch => {
    return {
        addTask: (task) => { dispatch(actions.AddTask(task)) }
    }
}

export default connect(null, dispatchMapToProps)(Form) 