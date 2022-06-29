import React from 'react'
import AddTask from './Addtask'
import Task from './Task'
import {useSelector} from 'react-redux'

const ListTask = () => {

    const taskList = useSelector(state=>state.taskReducer.taskList)
    const filterStatus = useSelector(state=>state.taskReducer.filterStatus)

  return (
    <div className="listbox">
        
        <div className="header">
            <h1>Todo List</h1>
            <AddTask/>
        </div>

        <div className="todolist">
            <h3>List of tasks</h3>
            {taskList
            .filter((el)=>{
                if (filterStatus==="complete")
                    {return el.isDone === true}
                else if (filterStatus==="incomplete")
                    {return el.isDone === false}
                else
                    {return el.isDone === false || true}    
            })
            .map(el=><Task key={el.id} id={el.id} desc={el.desc} isDone={el.isDone}/>)}
        </div>
    </div>
  )
}

export default ListTask