import React, { useRef } from 'react'
import * as classes from './form.module.css'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

const Form = props => {
    const textInput = useRef();
    const clearTextInput = () => textInput.current.value = '';

    const AddTask = event => {
        console.log('event.keyCode', event)
        if (event.keyCode === 13) {
            console.log(' event.target.value.trim()', event.target.value.trim())
            const newTask = event.target.value.trim();
            props.addTask({ 'title': newTask, 'status': 'new' })
            clearTextInput()
        }
    }
    return (
        <div>
            <input
                type='text' className={classes.task}
                placeholder='What needs to be done?'
                maxLength='64' required autoComplete='off'
                ref={textInput}
                onKeyUp={(e) => AddTask(e)}
            />
        </div>
    )

}
const dispatchMapToProps = dispatch => {
    return {
        addTask: (task) => { dispatch(actions.AddTask(task)) }
    }
}

export default connect(null, dispatchMapToProps)(Form) 