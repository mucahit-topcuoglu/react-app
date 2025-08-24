 import React from 'react'

 function Product({productName, productPrice}) {
    //const {productName, productPrice} = props;
   return (
     <>
        <div><h1>Product Ekrani</h1></div>
        <div>
            <div><p>İsim : {productName}</p></div>
             <div><p>Fiyat : {productPrice}</p></div>
        </div>
        <hr />
        
     </>
   )
 }

 export default Product
