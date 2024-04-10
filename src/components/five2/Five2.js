import './Five2.css'
import review1 from '../../images/person_1.jpg'
import review2 from '../../images/person_3.jpg'
import review3 from '../../images/person_4.jpg'


export function Five2()
{
    return (
        <div className='five2'>
            <div className='appc1'>
            <h1>Customers <br/> Reviews</h1>
            </div>
            <div className='reviews'>
                <div className='review'>
                    <div className='six-icons'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                    </div>
                    <p>Furniture World, great customer service and attention to detail, Ill be buying them again next time.</p>
                    <img src={review1} alt="image" className='card-img-top' />
                    <h6 className='name'>Ram<br></br>2 April 2024</h6>
                </div>
                <div className='review'>
                    <div className='six-icons'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                    </div>
                    <p>Furniture World, great customer service and attention to detail, Ill be buying them again next time.</p>
                    <img src={review2} alt="image" className='card-img-top' />
                    <h6 className='name'>Karthik<br></br>2 April 2024</h6>
                </div>
                <div className='review'>
                    <div className='six-icons'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                    </div>
                    <p>Furniture World, great customer service and attention to detail, Ill be buying them again next time.</p>
                    <img src={review3} alt="image" className='card-img-top' />
                    <h6 className='name'>Karthika<br></br>2 April 2024</h6>
                </div>
            </div>
        </div>
    )
}