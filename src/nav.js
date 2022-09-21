import React from 'react';
import { useState } from 'react';
import './nav.css';
import './basket.css';
import logo from './images/logo.svg';
import icon from './images/icon-cart.svg';
import image from './images/image-avatar.png';
import menu from './images/icon-menu.svg';
import bin from './images/icon-delete.svg';


function Nav(props) {

  // displaying cart items

  let cartDisplay
 if(props.cartChanged >=1){
   cartDisplay = 'fall limited edition sneakers'
 } else {cartDisplay = 'Sorry, your cart is empty!'}

  // toggling between classes
      const [isActive, setActive] = useState ('false');
      const  toggleClass = () => {
          setActive(!isActive);
      }

      const [listEmpty, setListFull] = useState('false');

      const cartList = ()=>{
        setListFull(!listEmpty);
      };


      // const [calculation, setCalculation] = useState(0);
      // useEffect(()=>{
      //   setCalculation((c)=>{
      //     let c = props.price;
      //     c*props.count})
      // });

     

    return ( //the img element is the item handling the event to call the toggle class function.
       <nav id='main-nav'>
         <div className='logo-container'>
         <div><img src={menu} alt='menu bar' className='menu-bar' onClick={toggleClass} /></div>
         <div><img src={logo} alt='logo'/></div>
         </div>
         <ul className={isActive ? null : "menu-active"}> 
           <li>Collections</li>
           <li>Men</li>
           <li>Women</li>
           <li>About</li>
           <li>Contacts</li>
         </ul>
         <div className='portfolio'>
           <div className='cart-container'>
             <img src={icon} alt='cart' onClick={cartList}/>
             <span onClick={cartList} className={props.cartChanged >= 1? 'cart-count': null}>{props.cartChanged}</span>
          </div>
           <div className='avatar'><img src={image} alt='avatar' className='click-avatar'/></div>
         </div>
            <div className= {listEmpty ? 'basket-item' : "toggle-cart"}>
                <div className='cart-txt'>cart</div>
                <div className='basket-fill-display'> 
                    <div className= {props.cartChanged === false? null:'baskte-item-sample'}>{
                      props.cartChanged === false? null:
                      <img src='' alt='item sample'/>}</div>
                    <div>
                    <div>{cartDisplay}</div>
                    <p>{props.cartChanged === false? null: props.count && <span>$375.00</span>} </p>
                    </div>
                    <div>{props.cartChanged === false? null:
                      <img src={bin} alt='delete-icon' onClick={props.deleteCart}/>}</div>
                </div>
                {props.cartChanged === false? null:
                <button className='checkout'>checkout</button>}
                
          </div>
       </nav>
      //  the toggling class was entered in the ul but called by the img on click. 
    );
  }
  export default Nav
