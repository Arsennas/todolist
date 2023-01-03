import React, { useState } from 'react';

const Input = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handlerClick = () => {
    addTodo(value)
    setValue('')
  }
  return (
    <div className='input-main'>
      <input className='input-main'
        placeholder="write the text"
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <button onClick={handlerClick}>add</button>
    </div>
  );
}

export default Input;