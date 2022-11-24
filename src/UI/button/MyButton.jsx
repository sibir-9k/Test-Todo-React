import React from 'react'
import style from "./MyButton.module.css"

export const MyButton = ({ text, ...props }) => {
  return (
    <button {...props} className={style.btn}>
      {text}
    </button>
  )
}
