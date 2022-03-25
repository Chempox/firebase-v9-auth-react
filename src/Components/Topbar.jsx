import React from 'react';
import { GrAddCircle } from 'react-icons/gr';
import {db} from "../Pages/firebase";
import {collection,addDoc} from "firebase/firestore";

import './Topbar.css'


const Topbar = () => {

  const [title,setTitle] = React.useState("");
  const [info,setInfo] = React.useState("");
  const [price,setPrice] = React.useState("");
  const handleSubmit = async (e) =>
  {
    e.preventDefault();
      await addDoc(collection(db, "item"), {
        title,
        info,
        price,
        completed: false,
      });
      setTitle("Default");
      setInfo("Default");
      setPrice("000");
  }

  return (
    <div className='topbarMain'>
        <h1>Add Item</h1>
        <button onClick={handleSubmit}><GrAddCircle size={30}/></button>
    </div>
  );
}

export default Topbar;