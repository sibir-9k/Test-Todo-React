import React, { useState } from "react";
import { MyButton } from "../../UI/button/MyButton";
import { MyInput } from "../../UI/input/MyInput";
import style from "./FormTodo.module.css";

export const FormTodo = ({ create }) => {
  const [todo, setTodo] = useState({ title: "", subtitle: "" });

  const addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: Date.now(),
    };
    console.log(newTodo)
    create(newTodo);
    setTodo({ title: "", subtitle: "" });
  };

  return (
    <form className={style.addTodo}>
      <MyInput value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} placeholder="Название задачи ...." />
      <MyInput value={todo.subtitle} onChange={(e) => setTodo({ ...todo, subtitle: e.target.value })} placeholder="Описание задачи ...." />

      <label htmlFor="file">Прикрепите фаил к задаче</label>
      <input type="file" id="file" name="file" multiple></input>    
      

      <MyButton onClick={addNewTodo} text="Добавить задачу" />
    </form>
  );
};
