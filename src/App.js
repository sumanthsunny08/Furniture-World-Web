import React, {useState} from 'react';
import './App.css';
import {One} from './components/one/One'
import {Two} from './components/two/Two'
import {Three} from './components/three/Three'
import {Four} from './components/four/Four'
import {Four2} from './components/four2/Four2'
import {Five} from './components/five/Five'
import {Five2} from './components/five2/Five2'
import {Six} from './components/six/Six'
import {Seven} from './components/seven/Seven'
import {Eight} from './components/eight/Eight'


function App() {
  const [show,setshow]=useState(true);
  const [cart,setcart]=useState([]);
  const [warning,setWarning]=useState(false);

  const handleClick=(item)=>{
    let ispresent=false;
    cart.forEach(element => {
        if(element.id==item.id)
        {
          ispresent=true;
        }
    })
    if(ispresent)
    {
      setWarning(true);
      setTimeout(()=>{setWarning(false)},2000);
      return;
    }
    setcart([...cart,item]);
  }



  return (
    <div className="App">
      <One></One>{/*navbar*/}
      <Two></Two>{/*bagroung image*/}
      {
        show?<Three size={cart.length}  handleClick={handleClick} setshow={setshow} ></Three>:cart.length ?<Four cart={cart} setcart={setcart} size={cart.length} setshow={setshow}></Four>:<Four2 setshow={setshow}></Four2>
      }
      {
        warning &&  <div className='errordanger'>Item Is Already Added In Your Cart</div>
      }
      <div className='appc2'>
      <h1>About</h1>
      </div>
      <Five></Five>
      <div className='appc2'>
      <h1>Our Partners</h1>
      </div>
      <Six></Six>
      <Five2></Five2>
      <Seven></Seven>
      <Eight></Eight>
    </div>
  );
}

export default App;
