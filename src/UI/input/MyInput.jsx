import React from 'react'
import style from './MyInput.module.css'

export const MyInput = ({placeholder, onChange}) => {
  return (
    <input onChange={onChange} className={style.input} type="text" placeholder={placeholder} />
  )
}
