import React from 'react';
import './Item.css'
import {db} from "../Pages/firebase";
import {collection,addDoc} from "firebase/firestore";


const Item = (props) => {
  const title = props.title;
  const price = props.price;
  const info = props.info;
  const handleDelete = props.handleDelete;
  const item = props.item;
  

  // const [title,setTitle] = React.useState("");
  // const [info,setInfo] = React.useState("");
  // const [price,setPrice] = React.useState("");
  // const handleSubmit = async (e) =>
  // {
  //   e.preventDefault();
  //   if (title !== "" && info !== "" && price !== "") {
  //     await addDoc(collection(db, "item"), {
  //       title,
  //       info,
  //       price,
  //       completed: false,
  //     });
  //     setTitle("");
  //     setInfo("");
  //     setPrice("");
  //   }
  // }
  return (
    <div className='itemMain'>
      <div className='infoSection'>
          <img src="https://gourmetdemexico.com.mx/wp-content/uploads/2021/05/dia-de-la-hamburguesa.jpg" alt="item" />
          <div className='infoRight'>
            <h1>{title}</h1>
            <p>{info}</p>
            <h5>{price}</h5>
            {/* <form className='infoRight-inner' onSubmit={handleSubmit}>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id='itemTitle'/>
              <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} id='itemInfo' />
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} id='ip' />
              <button>Agregar</button>
            </form> */}
          </div>
      </div>
      <div>
      <button className="button-delete" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;