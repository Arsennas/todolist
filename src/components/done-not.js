import React from 'react';

const DoneNot = ({todo}) => {

  const activeTodo = todo.filter(item => item.status === false)
  const comletedTodo = todo.filter(item => item.status === true)


  return (
    <div className='done-not'>
      <h1>not done:{activeTodo.length}</h1>
      <h1>done:{comletedTodo.length}</h1>
    </div>
  );
};

export default DoneNot;