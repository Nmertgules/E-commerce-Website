
import './CSS/showcase.css'
import { Link } from "react-router-dom";

export default function Card({product}){
    return(
   
    
    <Link to={`/product/${product.id}`} className='product_card'>
    <h3 className="card_name">{product.name}</h3>
    <img className="product_img" src={product.image}  alt="Innocence.img" />
    <br/>
    <span className="card_price"> <del className='old'>{product.old_price}</del> {product.price}</span>

    </Link>

   















    
    
 
    
    
    
    
    
 

    )

}