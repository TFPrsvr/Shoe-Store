import React, {useState} from 'react'
import productData from '../assets/product.json'
import './Product.css'
import Menu from '../Menu/Menu'
import minusIcon from '../assets/icon-minus.svg'
import plusIcon from '../assets/icon-plus.svg'
import cartIcon from '../assets/icon-cart.svg'
import Gallery from '../Gallery/Gallery'


const Product = ({ quantity, setQuantity, handleCartSubmit }) => {


  // const [quantity, setQuantity] = useState(0)

  
  const productDiscount = productData.product.price / 2

  
  const handlePlus = () => {
 setQuantity(quantity + 1)
  }
  
  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

//  const handleCart = () => {

//  }

    return (
      <>
<div id='productCont'>

      {console.log('productData:', productData)}

<Menu />

<div id='sneakerGallery' 
// style={{display: "hidden"}}
>
<Gallery />
</div>  

<div id='product'>

<div id='productInfo'>
     
     <h5 id='company' 
     style={{color: 'orange', margin: "2px"}}>
    Sneaker Company
     </h5>

     <h4 id='title'>
      {productData.product.title}
     </h4>

     <p id='description'>
      {productData.product.description}
     </p>
     
</div>

<div id='priceNav'>

     <p id='onSale'>${productDiscount.toFixed(2)}</p>

     <h5 id='price'>{productData.product.saleOff}%</h5>

     <p id='empty'></p>

     <h3 id='priceOG'>${productData.product.price}</h3>

</div>

<div id='quantity' className='incrementor'>

  <button className='minus-btn' onClick={handleMinus}>
   <img src={minusIcon} alt='' id='minus'/>
  </button>

    <span>{quantity}</span>

  <button className='plus-btn' onClick={handlePlus}>
   <img src={plusIcon} alt='' id='plus' />
  </button>

</div>

<div id='Add2Cart-btn'>

<button id='addCart' onClick={handleCartSubmit}>
  <img src={cartIcon} id='add2Cart' alt='Add to Cart' 
  style={{ height: '15px', width: '15px' }}/>
</button>


</div>

</div>

</div>
      </>
  )
}

export default Product