import LikeIcon from '/public/Catalog/like.svg'
import CartIcon from '/public/Catalog/add_cart.svg'
import Tovar from '/public/Catalog/tovarImg.png'

export default function Card ({name,price}){
    return(
        <div className="catalog-item">
            <div className="catalog_image">
                <img src={ Tovar } alt="" className="photo" />
            </div>
            <div className="catalog_descr">
                <p className="name_tovar">{name}</p>
                <div className="wrapper_btns">
                    <p className="price">{price} ₽</p>
                    <div className="like_cart_icon">
                        <a href="" className="like-link">
                            <img src={ LikeIcon } alt="" className="like_icon" />
                        </a>
                        <a href="" className="like-link">
                            <img src={ CartIcon } alt="" className="like_icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}