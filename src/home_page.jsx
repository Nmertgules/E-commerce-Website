import './CSS/home_page.css'
import { Link } from "react-router-dom";



export default function Home(){
    return(
    <div className="home_page_container">
    
   
     
     <div id='up_imgs_container'>

             <img src="images/LOGO.c.jpg" alt="" width="33%"/>
             <div style={{width: "34%"}}>

                 <img src="images/LOGO.jpg" alt="" width="100%" />    
         
             </div>
     
             <img src="images/LOGO.çanta.jpg" alt="" width="33%" />
     
     </div>
     
     <div style={{height: "30vh",display: "grid",placeItems: "center"}}>
         <Link to={"/showcase"} className="button_link"  >
             <span class="find_identity" >Find Your Identity...</span>
         </Link>
     </div>
 
     <div style={{display: "flex",gap: "40%",justifyContent: "center"}}>
         <img src="images/LOGO.etiket_ön.jpg" alt="" width="30%" />
         <img src="images/LOGO.etiket_arka.jpg" alt="" width="30%" />
     
     </div>
 </div>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  

    )
}

