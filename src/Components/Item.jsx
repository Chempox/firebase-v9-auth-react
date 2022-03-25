import React from 'react';
import './Item.css'
import {db} from "../Pages/firebase";
import {collection,addDoc} from "firebase/firestore";


const Item = () => {
  const [title,setTitle] = React.useState("");
  const [info,setInfo] = React.useState("");
  const [price,setPrice] = React.useState("");
  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    if (title !== "" && info !== "" && price !== "") {
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
  }
  return (
    <div className='itemMain'>
      <div className='infoSection'>
          <img src="https://gourmetdemexico.com.mx/wp-content/uploads/2021/05/dia-de-la-hamburguesa.jpg" alt="item" />
          <div className='infoRight'>
            <form className='infoRight-inner' onSubmit={handleSubmit}>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id='itemTitle'/>
              <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} id='itemInfo' />
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} id='ip' />
              <button>Guardar</button>
            </form>
          </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Item;