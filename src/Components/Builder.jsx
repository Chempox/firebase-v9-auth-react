import React from 'react';
import Topbar from './Topbar';
import './Builder.css'
import Item from './Item'
import { db } from '../Pages/firebase';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, QuerySnapshot, } from "firebase/firestore"
import { useState } from 'react/cjs/react.production.min';
import { useEffect } from 'react/cjs/react.production.min';



const Builder = () => {
    const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "item"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let itemsArray = [];
      querySnapshot.forEach((doc) => {
        itemsArray.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArray);
    });
    return () => unsub();
  }, []);

  return (
    <div className='builderMain'>
        <Topbar></Topbar>
        <div className='builderItemSection'>
            {items.map(items => {
                return <Item></Item>
            })}
            <Item></Item>
        </div>
    </div>
  );
}

export default Builder;