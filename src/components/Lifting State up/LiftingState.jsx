import React, { useState } from 'react'
import TodoList from './TodoList';


const data = [
    {
        title: 'React',
        status: 'new'
    },
    {
        title: 'Angular',
        status: 'new'
    },
    {
        title: 'Vuw',
        status: 'new'
    }
]
function LiftingState() {
    const [todos, setTodos] = useState(data);
    const handleItemBtnClick = (event) => () => {
        console.log(event);
    }
  return (
    <div>
        <h5>Todo List</h5>
        <TodoList todos={todos} handleItemBtnClick={handleItemBtnClick} />
    </div>
  )
}

export default LiftingState