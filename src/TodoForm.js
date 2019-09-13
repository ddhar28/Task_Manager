import React, { useState } from 'react'
import style from './TodoForm.module.css'

const TodoForm = ({ onClick }) => {
  const [disableDue, setDisableDue] = useState(false)

  return (
    <section className={style.form}>
      <input className={style.title} type='text' placeholder='Enter task title' />
      <div>
        <label>Assign to: </label>
        <input type='text' placeholder='Type names to assign' />
      </div>
      <div>
        <label>Due on: </label>
        <input type='date' disabled={disableDue} />
        <input type='checkbox' onClick={() => setDisableDue(!disableDue)} />No due date
      </div>
      <div>
        <label>Notes: </label>
        <input type='text' placeholder='Add extra details' />
      </div>
      <div>
        <button className={style.btn}
          onClick={onClick}>Add</button>
        <button className={style.btn}
          onClick={onClick}>Cancel</button>
      </div>
    </section>
  )
}

export default TodoForm
