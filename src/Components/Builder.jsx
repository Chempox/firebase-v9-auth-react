import React from 'react';
import Topbar from './Topbar';
import './Builder.css'
import Item from './Item'
import { collection, doc, onSnapshot, query, QuerySnapshot } from 'firebase/firestore';
import { db } from '../Pages/firebase';



const Builder = () => {
    
  return (
    <div className='builderMain'>
        <Topbar></Topbar>
        <div className='builderItemSection'>
            <Item/>
        </div>
    </div>
  );
}

export default Builder;