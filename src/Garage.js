import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Car from './Car';


export default class Garage extends React.Component {

    //URL = `http://127.0.0.1:8000/learn_api/default/api/car`
    state = {
        cars: [],
    };

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/learn_api/default/api/car`).then(res => {
            console.log(res);
            this.setState({cars: res.data});
        });
    }

    render(){
        return(
            <div className="container class_car">
    
                    <div className="row">
                
                        <div className="col-lg-3">
                    
                            <h1 className="my-4">Our Fleet</h1>
                            <div className="list-group">
                                <Link to="/garage">
                                    <a className="list-group-item">All</a>
                                </Link>
                                <Link to="/vip">
                                <a className="list-group-item">VIP</a>
                                </Link>
                                <Link to="/vvip">
                                <a className="list-group-item">VVIP</a>
                                </Link>
                            
                            </div>
                    
                        </div>
                    
                        <div className="col-lg-9 garage-items">
                    
                            <div className="row">
                                
                                {this.state.cars.map( car => (   //we are mapping through state to get individual car
                                <Car
                                key={car.id}
                                category = {car.category}
                                model = {car.model}
                                price = {car.price}
                                passengers = {car.passengers}
                                owner = {car.muridzi}
                                image = {car.image}
                                />
                                ))};
                    
                            
                    
                            </div>
    
                    
                        </div>
    
                
                    </div>
    
        
          </div>
        );
    }



}


