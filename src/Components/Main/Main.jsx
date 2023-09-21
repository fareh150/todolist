import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Main.css";


const Main = () => {

    const [todoList, setTodoList] = useState([])
    const [task, setTask] = useState("");

    const addTodo = () => {
        const newTask = {
            name: task,
            completed:false,
            id: uuidv4(),
        }
        setTodoList([...todoList, newTask]);
        setTask("");
    }
/* 1:05:28*/
    return <main>
        <div>
            <input type="text" placeholder="task..." 
            value={task} onInput={(ev) => setTask(ev.target.value)}
            />
            <button onClick={addTodo}>add</button>
        </div>
        <ul>
            {todoList.map((item) => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                </li>
            ))}
        </ul>
    </main>
}

export default Main;