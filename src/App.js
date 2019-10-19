import React from 'react';
import Nav from './Nav';
import Garage from './Garage';
import Services from './Services';
import Rent from './Rent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import ChooseShuttle from './Shuttles';
import Vip from './Vip';
import Vvip from './Vvip';



//this below is our component that returns JSX to index.html 
function App(){


    return(
        <Router>
        <div>
            <Nav/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/garage" exact component={Garage} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/rentcar" exact component={Rent} />
                    <Route path="/choose" exact component={ChooseShuttle} />
                    <Route path="/vip" exact component={Vip} />
                    <Route path="/vvip" exact component={Vvip} />
                </Switch>

            <Footer />
        </div>
        </Router>
    );
}


export default App;


