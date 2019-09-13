import React, { useState } from 'react'
import TodoForm from './TodoForm'

const TodoInput = () => {
  const [isInput, setIsInput] = useState(false)

  if (isInput) {
    return (<TodoForm onClick={() => setIsInput(false)} />)
  }
  return (<button onClick={() => setIsInput(true)}>Add to-do</button>)
}

export default TodoInput
