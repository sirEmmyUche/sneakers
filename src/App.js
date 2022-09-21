import React from 'react';
import {useState} from 'react';
import Nav from './nav';
import Main from './main.js';


function App() {
   const [cartChanged, setcartChanged] = useState(false);
   const [count, setCount] = useState(0);
  
    const addToCart = () =>{
      setcartChanged(cartChanged +1);
    }

    const add = ()=>{
       setCount(prevCount => prevCount +1)
    }

    const minus = ()=>{
       setCount(count -1)
       if(count === 0){
           setCount(count === 0)
       }; 
    }

    const deleteCart = () =>{
      setcartChanged(false)
    }

   


  return (
    <div>
     <Nav cartChanged ={cartChanged} count={count} deleteCart ={deleteCart}/>
     <Main addToCart = {addToCart} 
     add={add} 
     minus={minus}
     count={count}/>
    </div>
  );
}


export default App;
