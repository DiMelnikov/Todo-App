import { useState } from 'react'
import TodoForm from './components/TodoList/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
	const [todos, setTodos] = useState(['todo one', 'todo tw'])

	return (
		<div className="App">
			<h1>Todo App</h1>
			<TodoForm />
			<TodoList todos={todos} />
		</div>
	)
}

export default App
