import './Six.css'
import starbucks from '../../images/starbucks.png'
import tesla from '../../images/tesla.png'
import zoom from '../../images/zoom.png'
import Google from '../../images/Google.png'
import netflix from '../../images/netflix.png'
export function Six()
{
    return (
        <div className="sixp">
            <div className='d'>
            <img src={starbucks} alt="image"className='sixc' />
            </div>
            <div className='d'>
            <img src={tesla} alt="image"className='sixc' />
            </div>
            <div className='d'>
            <img src={zoom} alt="image"className='sixc' />
            </div>
            <div className='d'>
            <img src={Google} alt="image"className='sixc' />
            </div>
            <div className='d'>
            <img src={netflix} alt="image"className='sixc' />
            </div>
        </div>
    )
}