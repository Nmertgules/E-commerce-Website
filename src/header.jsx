import './CSS/LOGO.css'
import { Link } from "react-router-dom";



export default function Header(){
    return(
    <div className="header_container">      

    <img src="/images/LOGO.jpg" alt="LOGO" width="200"/>

    <div >
    <Link to={'/home_page'} className="header_button_link" >
    <span className="header_button">Home Page</span>
    </Link>
    <Link to={'/showcase'} className="header_button_link header_button_link-logos" >
        <span className="header_button" >Logos </span>
    </Link>
    </div>
    

    
    </div>  
     
    
    
    

    



    )
}