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
        console.log(itemsArray)
      });
      setItems(itemsArray);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
      await deleteDoc(doc(db, "item", id));
  }

  return (
    <div className='builderMain'>
        <Topbar></Topbar>
        <div className='builderItemSection'>
            {items.map(item => {
                return <Item
                item={item}
                title={item.title}
                info={item.info}
                price={item.price}
                handleDelete={handleDelete}>
                </Item>
            })}
            <Item></Item>
        </div>
    </div>
  );
}

export default Builder;