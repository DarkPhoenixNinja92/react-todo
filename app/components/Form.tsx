'use client'

const Form = ({todos, setTodos, inputText, setInputText, setStatus}) => {

    const inputTextHandler = ( e:any ) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text:inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return (
        <form>
            <input type="text" className="todo-input" placeholder="Create a new todo..." onChange={inputTextHandler} value={inputText} />
            <button type="submit" onClick={submitTodoHandler} className="todo-button">Add</button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form;