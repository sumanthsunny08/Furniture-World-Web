import './Five.css'
import about from '../../images/about.jpg'
export function Five()
{
    return (
        <div className='fiveparent'>
            <div className='fivec1'>
                <img src={about} alt="image"className='card-img-top' />
            </div>
            <div className='fivec2'>
                    <h1 >Furniture Is Important Part Of Comfort</h1>
                    <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide
                    </p>
                    <a class="btn " href="#" role="button">Learn More</a>
                </div>
        </div>
    )
}