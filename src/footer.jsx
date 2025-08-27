import './CSS/LOGO.css'
import { Link } from "react-router-dom";


export default function Footer(){
    return(
    <div className="footer_container">
       
       <div className="footer_columns" style={{ width: "150px"}}>
      
          <img src="images/LOGO.jpg" alt="Logo" width="200px "height="70"/>
          <Link to={'/about'} className="button_link" >
             <span className="button" style={{fontSize:"20px"}}>About us</span>
          </Link>
   
   
        </div>
    

       <div className="footer_columns"  >
    
       <span className="footer_big_text">Contact us:</span>
    
       <a href="" className="button_link" >
           <span className="button" style={{fontSize:"15px"}}>PHONE :0536 278 96 32</span>
       </a>     
    
    
    
        <a href="" className="button_link" >
           <span className="button" style={{fontSize:"15px"}}>GMAİL:Logo@gmail.com</span>
        </a>     

 
         
       </div>

       <div className="footer_columns" style={{ width: "300px"}}>
    
        <samp class="footer_big_text">Follow us:</samp>
                
        <a href="" style={{marginLeft:"30px"}} >
            <img src="images/instegram.jpg" alt="instegram" style={{height: "70px"}}/>
                           
        </a>     
        </div>

        <div className="footer_copyright">
           ©  2025   LOGO Europe . 
        
            
        </div>





    
    </div >




    );


}