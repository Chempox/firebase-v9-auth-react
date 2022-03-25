import React from 'react';
import { GrAddCircle } from 'react-icons/gr';

import './Topbar.css'


const Topbar = () => {
  return (
    <div className='topbarMain'>
        <h1>Add Item</h1>
        <GrAddCircle size={30}/>
    </div>
  );
}

export default Topbar;