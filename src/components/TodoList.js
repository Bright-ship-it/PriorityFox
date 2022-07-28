import React, { useState } from 'react';
import CreateTask from '../modals/CreateTask'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
    }

    return (
        <>
            <div className='header text-center'>
                <h3>My Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className='task-container'>

            </div>
            <CreateTask modal={modal} toggle={toggle} save = {saveTask}/>
        </>
    );
};

export default TodoList;