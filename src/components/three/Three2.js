import './Three.css'

export function Three2({item,handleClick})
{
    const {id,title,price,img}=item;
    return (
        <div className="card ">
            <img src={img} alt="image"className='card-img-top' />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className='six-icon'>
                <p className="card-text">{price}/-</p>
                <div className='six-icons'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half"></i>
                </div>
                </div>
                <a  className="btn btn-primary" onClick={()=>handleClick(item)} >ADD TO CART</a>
                <h6>Free Cancellation</h6>
            </div>
        </div>
    )
}