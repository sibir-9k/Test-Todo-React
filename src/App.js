import React, {useState} from "react";
import "./App.css";
import {TodoList} from "./components/TodoList";
import {FormTodo} from "./components/FormTodo/FormTodo";

function App() {
	const [todos, setTodos] = useState([
		{id: 1, title: "JS", subtitle: "Web lang"},
		{id: 2, title: " NodeJS - NodeJS - NodeJS - NodeJS", subtitle: " Web lang 1 - Web lang 1 - Web lang 1"},
		{id: 3, title: "Webpack", subtitle: "Web lang 2"},
		{id: 4, title: "Bootstrap", subtitle: "Web lang 3"},
	]);

	const createTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const removeTodo = (todo) => {
		setTodos(todos.filter((p) => p.id !== todo.id));
	};

	return (
		<div className="App">
			<FormTodo create={createTodo} />
			{todos.length !== 0 
      ? <TodoList remove={removeTodo} todos={todos} title="Список задач:" /> 
      : <h2 style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1.5rem' }}>
        Список задач пуст
        </h2>
      }
		</div>
	);
}

export default App;
