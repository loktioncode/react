import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

 

//this below is our component that returns JSX to index.html 
function ChooseShuttle(){

    return(
        <div className="section" id="shuttle">
				    <div className="row" >

					    <div className="booking-form">
						    
                                <div className="form-group car" >
                                    <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
                                        <div class="carousel-inner" role="listbox">
                                            <div class="carousel-item active choose">
                                                <div className="col-md-12">
                                                    <div className="card h-100">
                                                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                                        <div className="card-body">
                                                        <h4 className="card-title">
                                                            <a href="#">Space Shuttle 1</a>
                                                        </h4>
                                                        <h5>$24.99</h5>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                                        </div>
                                                        <div className="card-footer">
                                                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                                        <button className="btn btn-secondary" style={{float:"right"}}>Select</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div className="col-md-12 choose">
                                                        <div className="card h-100">
                                                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                                            <div className="card-body">
                                                            <h4 className="card-title">
                                                                <a href="#">Car Two</a>
                                                            </h4>
                                                            <h5>$24.99</h5>
                                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                                            </div>
                                                            <div className="card-footer">
                                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                                            <button className="btn btn-secondary" style={{float:"right"}}>Select</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div className="col-md-12 choose">
                                                        <div className="card h-100">
                                                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                                            <div className="card-body">
                                                            <h4 className="card-title">
                                                                <a href="#">Space Car 3</a>
                                                            </h4>
                                                            <h5>$24.99</h5>
                                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                                            </div>
                                                            <div className="card-footer">
                                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                                            <button className="btn btn-secondary" style={{float:"right"}}>Select</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>

                                </div>
					        
					    </div>
				    </div>
		    
	    </div>

    );
}



export default ChooseShuttle;