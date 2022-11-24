import React from 'react'
import { MyButton } from '../../UI/button/MyButton'
import style from './Todo.module.css'

export const Todo = (props) => {
 
  return (
    <div className={style.todo}>
				<div className={style.todo__content}>
					<strong>{props.number}. {props.todo.title}</strong>
					<p>{props.todo.subtitle}</p>
				</div>
        <div className='todo__btn'>
          <MyButton onClick={() => props.remove(props.todo)} text="Удалить"/>
        </div>
			</div>
  )
}
