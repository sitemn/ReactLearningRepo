import React, {useState, useEffect} from 'react';

export default function ToDo() {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState();
    
    const handleAddTask = () => {
        const found = todoList.find(item => item.task === newTask);
        if(!found){
            setTodoList([...todoList, { id: Date.now(), task: newTask, completed: false }]);
            setNewTask('');
        }else{
            alert("Task already exists!");
            return;
        }
    };

    const handleTaskComplete = (id) => {
        const updatedTaskComplete = todoList.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTodoList(updatedTaskComplete);
    };

    const handleTaskDelete = (id) => {
        setTodoList(todoList.filter(task => task.id !== id));
    };

  return (
    <div>
        <h1>Daily To Do List</h1>
        <hr></hr>
        <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}>    
        </input>
        <button onClick={handleAddTask}>Add</button>
        <ul>
            {todoList.map((task)=>(
                <li key={task.id}>
                <input 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => handleTaskComplete(task.id)}>
                </input>
                {task.task}
                <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
