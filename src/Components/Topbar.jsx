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
      setTitle("");
      setInfo("");
      setPrice("");
  }

  return (
    <div>
      <div className='topbarMain'>
          <h1>Add Item</h1>
          <button onClick={handleSubmit}><GrAddCircle size={30}/></button>
      </div>
      <form className='infoRight-inner' onSubmit={handleSubmit}>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id='itemTitle'/>
              <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} id='itemInfo' />
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} id='ip' />
              <button>Agregar</button>
      </form>
    </div>
  );
}

export default Topbar;