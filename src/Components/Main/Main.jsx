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

    const deleteTodo = (id) => {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    }

    const completeTodo = (todo) => {
        let temporalTodo = todoList ;
        const position = temporalTodo.indexOf(todo);
        temporalTodo[position].completed = !temporalTodo[position].completed;
        setTodoList([...temporalTodo]);
    }

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
                    <h3 className={item.completed ? "completed" : ""} onClick={() => completeTodo(item)}>{item.name}</h3>
                    <button onClick={() => deleteTodo(item.id)}>x</button>
                </li>
            ))}
        </ul>
    </main>
}

export default Main;