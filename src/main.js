import React from 'react';
import './main.css';
import {useState} from 'react';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';
import product4 from './images/product4.jpg';
import icon from './images/icon-cart.svg';
// import './lightbox.css';
// import next from './images/icon-next.svg';
// import prev from './images/icon-previous.svg';
// import close from './images/icon-close.svg';



function Main (props) {
    const  [displayPics, setDisplayPics]= useState({img:product1});

    const handleDisplayPics = (event) =>{
           setDisplayPics(displayPics.img = event.target.textContent)
    }

    return (
            <main>
               <div id='light-bulb'>
                   <div className='display-item'><img src={displayPics.img} alt='shoe'/></div>
                   <div className='box'>
                       <div><img src={product1} alt='shoe' onClick={handleDisplayPics}/></div>
                       <div><img src={product2} alt='leaf' onClick={handleDisplayPics}/></div>
                       <div><img src={product3} alt='sneakers' onClick={handleDisplayPics}/></div>
                       <div><img src={product4} alt='shoe' onClick={handleDisplayPics}/></div>
                   </div>
               </div>
               <div className='section-2'>
                   <h1> Sneaker Company</h1>
                   <h2>Fall Limited Edition Sneakers </h2>
                   <p className='txt'>{` These low-profile sneakers are your perfect casual wear companion.
                   Featuring a durable rubber outer sole,
                   they’ll withstand everything the weather can offer.`}
                   </p>
                   <div className='amount'>
                       <div className='tag'>
                           <div className='price-tag'>$125.00</div>
                           <button className='percent'>50%</button>
                       </div>
                       <div className='change-price'>$250.00</div> 
                   </div>
                   <div className='item-btn'>
                       <div className='btn-group'>
                           <button className='minus-btn' onClick={props.minus}>-</button>
                           <button className='num-btn'>{props.count}</button>
                           <button className='add-btn' onClick={props.add}>+</button>
                       </div>
                       <button className='cart-btn'onClick={props.addToCart}>
                           <img src={icon} alt='cart'/>Add to cart</button>
                   </div>
               </div>
            </main>
    );
}


export default Main;




// <div className='light-box'>
//   <div className='next'>< img src={next} alt='next-icon' className='light-box-content'/></div>
//  <div className='prev'>< img src={prev} alt='prev-icon' className='light-box-content'/></div>
//   <div className='close'><img src={close} alt='close-icon' className='light-box-content'/></div>
//   <div className='light-box-content'><img src={product1} alt='shoe'/></div>
//  </div>