import React from 'react';
 


//this below is our component that returns JSX to index.html 
function Car({category,passengers,price,id,model,image,owner}){

    return(
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
            <a href="#"><img className="card-img-top" src={image} alt=""></img></a>
            <div className="card-body">
                <h4 className="card-title">
                <a >{model}</a>
                </h4>
                <h5>${price}</h5>
                <p className="card-text">{category}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
            </div>
        </div>
    );
}



export default Car;