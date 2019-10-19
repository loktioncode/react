import React from 'react';
import "./App.css";
import {Link} from 'react-router-dom';
 



//this below is our component that returns JSX to index.html 
function Rent(){

    return(
        <div className="section" id="booking">
            <div className="section-center">
            <div className="container">
				<div className="row" >
					<div className="booking-form">
						<form>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="form-label">
                                        <label for="firstName">Full name</label>
                                        <input type="text" id="fullName" className="form-control" placeholder="First name" required="required" autofocus="autofocus"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-label">
                                        <label for="firstName">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" required="required" autofocus="autofocus"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="form-label">
                                        <label for="firstName">Phone</label>
                                        <input type="tel" id="phonenum" className="form-control" placeholder="Phone number" required="required" autofocus="autofocus"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="form-label">
                                        <label for="firstName">Pickup Loacaton</label>
                                        <input type="text" id="city" className="form-control" placeholder="Pickup Location" required="required" autofocus="autofocus"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="form-label">
                                        <label for="firstName">Where to?</label>
                                        <input type="text" id="destination" className="form-control" placeholder="Destination" required="required" autofocus="autofocus"></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-label">
                                        <label for="firstName">Pickup Date</label>
                                        <input type="date" id="date" className="form-control" placeholder="Destination" required="required" autofocus="autofocus"></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-label">
                                        <label for="PickupTime">Time</label>
                                        <input type="ptime" id="picktime" className="form-control" placeholder="Destination" required="required" autofocus="autofocus"></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-label">
                                        <label for="AM/PM">AM/PM</label>
                                            <select className="form-control">
                                                <option>AM</option>
                                                <option>PM</option>
                                            </select>
                                            <span className="select-arrow"></span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
							
							<div className="form-btn">
                            <Link to="choose">
								<button className="submit-btn">Book Now</button>
                            </Link>
							</div>
					    </form>
					</div>
				</div>
			</div>
		    </div>
	    </div>
    );
}



export default Rent;