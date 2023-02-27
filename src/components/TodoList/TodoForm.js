import { useState } from 'react'

function TodoForm({ addTodo }) {
	const [text, setText] = useState('')

	const onSubmitHandler = (event) => {
		event.preventDefault()
		addTodo(text)
		setText('')
	}

	return (
		<form onSubmit={onSubmitHandler}>
			<input
				placeholder="Enter new todo"
				value={text}
				onChange={(e) => setText(e.target.value)}
			></input>
			<button type="submit">submit</button>
		</form>
	)
}

export default TodoForm
