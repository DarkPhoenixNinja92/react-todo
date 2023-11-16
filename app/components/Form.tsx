'use client'

const Form = ({setInputText, todos, setTodos, inputText}) => {

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
    
    return (
        <form>
            <input type="text" className="todo-input" placeholder="Create a new todo..." onChange={inputTextHandler} value={inputText} />
            <button type="submit" onClick={submitTodoHandler}>Add</button>
            <div className="select">
                <select name="todos" className="filter-todos" title="filter">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">completed</option>
                </select>
            </div>
        </form>
    )
}

export default Form;