import { useParams, Link } from "react-router-dom";
import products from "./products";
import  './CSS/product.css'

export default function ProductDetail() {
  const { id } = useParams();                         // id çekme
  const product = products.find(p => String(p.id) === id);
  return (

<div>
    <h1 id="product_title">{product.name}</h1>
    <div style={{display:"flex",flexWrap:"wrap",gap:"15vw"}}>


    
        <div className="product_box">
           <img src={product.image}   id="product_detail_img" className="zoom_deatil_img"   alt="product img" />
        
        
        
   
        </div>



        <div className="product_detail_container">
            <br/><br/><br/>

            <div className="buy_container">
                <span > {product.price}</span>
        
    

        
                <a className="button_link"  target="_blank" href={product.link}>

           
                     <span className="button" >Buy</span>
        
        
                </a>

            </div>

            <table style={{margin: "50px"}}>
                <tr style={{backgroundColor:"gray",textAlign:"center"}}>
                    <td>Size</td>
                    <td>S</td>
                    <td>M</td>
                    <td>L</td>
                    <td>XL</td>
               </tr>

                <tr  style={{color:"black",textAlign:"center",backgroundColor:"lightgray"}} >

                    <th width="200" >Chest  (cm)</th>
                    <th width="150">92-96</th>
                    <th width="150">97-101</th>
                    <th width="150" >102-106</th>
                    <th width="150" height="40" >107-111</th>
                </tr>

            </table>


            <br/>
            <h2 >Product Features</h2>
            <ul id="product_detail" >
            

             {product.features.map((feature, index) => (
                <li key={index} style={{textAlign:"left"}}>{feature}</li>
              ))}
    
            </ul>


            
            
            
        
           

            


 


        </div>
    </div>


</div>
  

  
  
  
  );
}