import React from 'react';
import './App.css';

 



//this below is our component that returns JSX to index.html 
function Footer(){

    return(
        <div className="container cont">
           <footer >
           <div className="container">
                <p class="m-0 text-center" style={{padding:"20px"}}>ALC 4.0 &copy; Project Phase || GCP Cloud Path || Elisha Bere</p>
           </div>
           </footer>

        </div>
    );
}



export default Footer;