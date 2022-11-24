import React from 'react'
import { Todo } from './Todo/Todo.jsx'

export const TodoList = ({todos, title}) => {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1.5rem' }}>
        {title}
      </h2>
      {todos.map((todo, index) => (
        <Todo number={index + 1} todo={todo} key={todo.id} />
      ))}
    </>
  )
}
