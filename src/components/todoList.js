import React, { useState} from 'react';

const TodoList = ({ todo, delateTodo, statusTodo }) => {
  const [select, setSelect] = useState('all');

  return (
    <div className='todoList3'>
      <select
        value={select}
        onChange={(e) => setSelect(e.target.value)}>
        <option value={'all'}>все</option>
        <option value={'done'}>добавленный</option>
        <option value={'not done'}>не добавленный</option>
      </select>
      {
        todo.filter(item => {
          if(select === 'all') {
            return true
          } else if( select === 'done') {
            return item.status
          } else if(select === 'not done') {
            return !item.status
          }
        }).map((item, index) => {
          return (
            <div key={item.id}>
              <span>{index + 1}</span>
              <input
                onClick={() => statusTodo(item.id)}
                type="checkbox"
                checked={item.status} />
              <span style={{color: item.status ? 'gray': '#fff'}}>{item.title}</span>
              <button
                style={{display: item.status ? 'block': 'none'}}
                onClick={() => delateTodo(item.id)}>delete</button>
            </div>
          )
        })
      }
    </div>
  );
};

export default TodoList;