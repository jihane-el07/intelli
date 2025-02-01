import React, { useState, useEffect } from 'react';
import './Multimedia.css';
import axios from "axios";
import Cards from '../Listing/Cards';  // Assuming you have a Cards component
import Sidebar from './Sidebar';  // Assuming you have a Sidebar component
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { Link, useNavigate } from 'react-router-dom';
export default function Listing() {
    const [cards, setCards] = useState([]); 

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get( "http://127.0.0.1:8000/api/articles");
                const filteredCards = response.data.filter(article => article.categorie === 'Electronics'); // Filter by id
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
                    <div className="titre">
                        <h1 id='h11'>Multimedia</h1>
                        <Link to="/" className='aa'>Home ---</Link>
                        <Link to="/listing" className='aa'>ListingProduct ---</Link>
                        <Link to='/multimedia' className='aa'>Multimedia</Link>
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
                            <Cards key={card.id}   Carte={card} />
                        ))}
                </div>
          </div>
            
            
           
            <Footer/> 
        </div>
    );
}

