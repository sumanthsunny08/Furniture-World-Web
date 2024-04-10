import './Three.css'
import {list1} from '../../data.js';
import {Three2} from './Three2';
import {list} from '../../data2.js';


export function Three({size,handleClick,setshow})
{
    return (
      <div >
        <div className='appc1'>
        <h1>New Arrival <br/> Shop Now</h1>
        </div>
        <div className='ic1'><span><i class="fa-solid fa-cart-shopping" onClick={()=>setshow(false)}></i></span><span>{size}</span></div>
        <div className='ic2'><span><i class="fa-solid fa-house" onClick={()=>setshow(true)} ></i></span></div>
        <div className='parent'>
          {
            list1.map((item)=>(<Three2 item={item} handleClick={handleClick}></Three2>))
          }
          </div>
          <div className='appc2'>
          <h1>Most Selling</h1>
          </div>
          <div className='parent'>
          {
            list.map((item)=>(<Three2 item={item} handleClick={handleClick} ></Three2>))
          }
      </div>
      </div>
    );
}