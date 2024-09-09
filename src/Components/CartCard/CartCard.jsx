import React, {useState} from 'react'
import cartIcon from '../assets/icon-cart.svg'
import trashIcon from '../assets/icon-delete.svg'
import '../CartCard/CartCard.css'



const CartCard = ({ quantity, item}) => {
  const [cart, setCart] = useState([])
  // const [addItem, setAddItem] = useState([])
  // const [removeItem, setRemoveItem] = useState(false)

  const handleCartSubmit = () => {
    setCart(prevCart => [...prevCart, { item: addItem, quantity }]);
  }
  
  // const handleDelete = (index) => {
  //   setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  // };

 const handleDelete = (itemId) => {
  setCart(prevCart => prevCart.filter(item => item.id !== item.id));
}


    return (
    <div>
      {/* {console.log('item.id:')} */}
<div id='cartCard'>

<p id='cartIcon'>
  <img src={cartIcon} className='cartCard' alt='Cart' />
</p>

<p id='item'>
  {item}
</p>

<button id='remove' onClick={() => handleDelete(item.id)} >
  <img src={trashIcon} alt='' className='trash' />
</button>

 </div>
</div>
  )
}

export default CartCard
