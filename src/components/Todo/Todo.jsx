import React from 'react'
import style from './Todo.module.css'

export const Todo = ({todo}) => {
  return (
    <div className={style.todo}>
				<div className="todo__content">
					<strong>{todo.id}. {todo.title}</strong>
					<p>{todo.subtitle}</p>
				</div>
        <div className='todo__btn'>
          <button>Удалить</button>
        </div>
			</div>
  )
}
