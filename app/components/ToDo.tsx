'use client'

const ToDo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id != todo.id));
    };

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">Mark as Complete</button>
            <button onClick={deleteHandler} className="delete-btn">Delete Todo</button>
        </div>
    )
}

export default ToDo;