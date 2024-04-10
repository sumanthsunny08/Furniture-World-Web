import './Two.css'
import img1 from '../../images/background.jpg'

export function Two()
{
    return(
        <div >
            <div>
                <div>
                    <img src={img1} alt="image"className='imgg' />
                </div>
                <div className='child2'>
                    <h1 ><span>Make</span> Your Comfort <br/>Is Our <span>Happiness</span></h1>
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide</p>
                    <a class="btn " href="#" role="button">Shop Now</a>
                </div>
            </div>
        </div>
    )
}
