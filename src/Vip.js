import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

 



//this below is our component that returns JSX to index.html 
function Vip(){

    return(
        <div class="container class_car">

                <div class="row">
            
                    <div class="col-lg-3">
                
                        <h1 class="my-4">Our Fleet</h1>
                        <div class="list-group">
                            <Link to="/garage">
                                <a class="list-group-item">All</a>
                            </Link>
                            <Link to="/vip">
                            <a class="list-group-item">VIP</a>
                            </Link>
                            <Link to="/vvip">
                            <a class="list-group-item">VVIP</a>
                            </Link>
                        
                        </div>
                
                    </div>
                
                    <div class="col-lg-9 garage-items">
                
                        <div class="row">
                
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div class="card-body">
                                <h4 class="card-title">
                                <a href="#">Item One</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div class="card-body">
                                <h4 class="card-title">
                                <a href="#">Item Two</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div class="card-body">
                                <h4 class="card-title">
                                <a href="#">Item Three</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                            <div class="card-body">
                                <h4 class="card-title">
                                <a href="#">Space X amazon 2</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                            </div>
                        </div>
                
                        </div>

                
                    </div>

            
                </div>

    
      </div>
    );
}



export default Vip;