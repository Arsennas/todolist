import React from 'react';

const Output = ({todo}) => {
  return (
    <div className='output'>
      <h1>Число листов:{todo.length}</h1>
    </div>
  );
};

export default Output;