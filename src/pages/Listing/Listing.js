import React, { useState, useEffect } from 'react';
import './Listing.css';
import axios from "axios";
import Cards from './Cards';  // Assuming you have a Cards component
import Sidebar from './Sidebar';  // Assuming you have a Sidebar component
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { Link } from 'react-router-dom';
export default function Listing() {
    const [cards, setCards] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get( "http://127.0.0.1:8000/api/articles");
                const filteredCards = response.data.filter(article => article.id <= 12); // Filter by id
                setCards(filteredCards);
                // setCards(response.data); // Update state with API response
            } catch (error) {
                console.error("Error fetching articles:", error);
                if (error.response) {
                    console.error("Server Response:", error.response.data);
                }
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
          <div id="Post">
                <img src="pics/post1.png" width={1519} height={700} id='imgs' alt="" />
                <div id='float'>
                  <Nav />
                    <div className="title">
                        <h1 id='lis'>ListingProduct</h1>
                        <Link to="/" className='aa'>Home ---</Link>
                        <Link to='/listing' className='aa'>ListingProduct</Link>
                    </div>
                </div>
            </div>
            <div className="main">
            <Sidebar/>
            <div>
                <img src="./images/off.jpg" alt="" id="offer"/>
            </div>
                <div className="cards-container">
                {cards.map((card) => (
                            <Cards key={card.id} Carte={card} />
                        ))}
                </div>
                

                
                        </div>
            
            
           
            <Footer/> 
        </div>
    );
}

