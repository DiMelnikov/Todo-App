import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import TodoForm from './components/TodoList/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4(),
		}

		return setTodos([...todos, newTodo])
	}

	const deleteTodoHandler = (id) => {
		return setTodos(todos.filter((todo) => todo.id !== id))
	}

	return (
		<div className="App">
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} deleteTodo={deleteTodoHandler} />
		</div>
	)
}

export default App