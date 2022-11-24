import React, {useState} from "react";
import {Todo} from "./components/Todo/Todo";

import "./App.css";

function App() {
	const [todos, setTodos] = useState([
		{id: 1, title: "JS", subtitle: "Web lang"},
		{id: 2, title: "NodeJS", subtitle: "Web lang 1"},
		{id: 3, title: "Webpack", subtitle: "Web lang 2"},
    {id: 4, title: "Bootstrap", subtitle: "Web lang 3"}
	]);

	return (
		<div className="App">
			{todos.map((todo) => (
				<Todo todo={todo} key={todo.id}/>
			))}
		</div>
	);
}

export default App;
