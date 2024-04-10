import './Four.css'
import React, {useEffect, useState} from 'react';
import {Three2} from '../three/Three2.js';

export function Four({cart,setcart,size,setshow})
{
    const [price,setPrice]=useState(0);

    const handlePrice=()=>{
      let ans=0;
      cart.map((item)=>{
        ans+=item.amount*item.price;
      })
      setPrice(ans);
    }

    const handleRemove=(item2)=>{
      const arr=cart.filter((item)=>item.id!=item2.id)
      setcart(arr);
    }

    const handleChange=(item,d)=>{
      let ind=-1;
      cart.forEach((element,index)=> {
        if(element.id==item.id)
        {
          ind=index;
        }
      });
      const temparr=cart;
      temparr[ind].amount+=d;
      if(temparr[ind].amount==0)
      {
        temparr[ind].amount=1;
      }
      setcart([...temparr]);
    }

    useEffect(()=>handlePrice())

    return (
      <div className='fourr'>
            <div className='appc1'>
          <h1>Your Cart</h1>
          </div>
            <div className='ic1'><span><i class="fa-solid fa-cart-shopping" onClick={()=>setshow(false)}></i></span><span>{size}</span></div>
            <div className='ic2'><span><i class="fa-solid fa-house" onClick={()=>setshow(true)} ></i></span></div>
          
          {  
            cart.map((item)=>(
              <div className='four-p'>
                <div className='four-c1'>
                  <img src={item.img}/>
                  <p>{item.title}</p>
                </div>
                <div className='four-c2'>
                  <button onClick={()=>handleChange(item,1)}> + </button>
                  <button> {item.amount} </button>
                  <button onClick={()=>handleChange(item,-1)}> - </button>
                </div >
                <div className='four-c3'>
                  <span>{item.price}/-</span>
                  <button onClick={()=>handleRemove(item)}><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            ))
          }
          <div className='four-p2'>
            <span>Total Price Of Your Cart </span>
            <span>Rs - {price}</span>
          </div>
      </div>
    )
}