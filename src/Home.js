import React from 'react';
import style from "./home.module.css";
 


// const counter = 8; this is just like a variable that doesnt change

//this below is our component that returns JSX to index.html 
function Home(){

    return(
        <div >
            <header className={style.header}>
                <h1 className={style.welcom} >Travel Planet Earth With The Best Fleet</h1>
                <button className={style.home_btn} href="#">EXPLORE</button>
            </header>

            <section className={style.sect}>
                <div className="container">
                <h1>Section Heading</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
                </div>
            </section> 

        <section className={style.last_sect}>
         
        </section>

                     
    </div>           


    );
};



export default Home;
