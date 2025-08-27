import './CSS/showcase.css'
import { Link } from "react-router-dom";
import products from './products';
import Card from './product_card.jsx'
export default function Showcase(){
    return(
        <div>
        <h2 style={{textAlign:"center",color:"white",fontSize:"5vh"}} >Logos</h2>
        <div className="showcase_container" >
            {products.map((item)=>(<Card key={item.id} product={item}/>))}




        </div>

        </div>
    
   
   
   
   
   

   


    )

}