import './Four2.css'
import React, {useEffect, useState} from 'react';
import cartisempty from '../../images/cartisempty.jpg';

export function Four2({setshow})
{
    return (
        <div className='four2'>
            <img src={cartisempty} alt="image"className='card-img-top' />
            <h3>Your Cart is Empty!!Lets Continue Shopping?</h3>
            <button onClick={()=>setshow(true)}>Continue Shopping <span><i class="fa-solid fa-house" onClick={()=>setshow(true)} ></i></span></button>
        </div>
    );
}