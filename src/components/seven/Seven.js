import './Seven.css'
import {bg} from '../../images/bg.jpg'
export function Seven()
{
    return (
        <div className='newsletter'>
            <h2>Subscribe To Newsletter</h2>
            <div className='news-box'>
                <input type='text' placeholder='Enter Your Email'/>
                <a href='#' className='btn'>Subscribe</a>
            </div>
        </div>
    )
}