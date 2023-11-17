'use client'

const ToDo = ({ text, todo, todos, setTodos }) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "line-through" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check">Done</i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash">Delete</i>
            </button>
        </div>
    );
}

export default ToDo;