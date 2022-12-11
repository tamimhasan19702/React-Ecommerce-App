import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.scss';


function Homepage({history}) {
  return (
    <div className='homepage'>
      <Directory history={history}/>
    </div>
  )
}

export default Homepage