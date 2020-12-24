import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random()*1000
            }
        ])
        setInputText('')
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <div>
            <form onSubmit={formSubmitHandler}>
                <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler}/>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form