import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (name) => {
        setActiveCategory(activeCategory === name ? null : name);
    };

    const categories = [
        { name: "Multimedia", imgSrc: "images/iconLap.png", subcategories: ["Phones", "Personal Computer", "Smartphones", "Laptop", "Phone Accessories", "Tablet Parts", "Watches", "Camera", "Camera Accessories", "Laptop Accessories"] },
        { name: "Household Appliances", imgSrc: "images/houseHold.png", subcategories: ["Refrigerators", "Microwaves", "Dishwashers", "Cooktops", "Dryers", "Toasters", "Blenders", "Air Fryers", "Vacuums"] },
        { name: "Sport", imgSrc: "images/Sport.png", subcategories: ["Sport Clothes", "Dumbbell Set", "Treadmill", "Traction Bar", "Protein", "Shoes"] },
        { name: "Pets", imgSrc: "images/Pets.png", subcategories: ["Dogs", "Cats", "Fish", "Birds", "Beds & Blankets", "Toys & Enrichment", "Crates & Carriers"] },
        { name: "Home And Garden", imgSrc: "images/Home.png", subcategories: ["Home", "Villa", "Studio", "Apartment", "Gardening Tools"] },
        { name: "Clothes", imgSrc: "images/Clothes.png", subcategories: ["Women's Clothing", "Men's Clothing", "Kids Clothing", "Shoes", "Accessories"] },
        { name: "Work And Study", imgSrc: "images/Work.png", subcategories: ["Notebooks", "Bags", "Markers", "Pencils", "Backpacks", "Files"] },
        { name: "Vehicles", imgSrc: "images/Vehicules.png", subcategories: ["Cars", "Bicycles", "Trucks", "Buses", "Motorcycles", "Electric Scooter", "Van"] }
    ];

    return (
        <div className="navSide">
            {categories.map((category, index) => (
                <div key={index} className="cate-Item">
                    {/* Clickable Category */}
                    <div className="category-header" onClick={() => toggleCategory(category.name)}>
                        <img src={category.imgSrc} alt={category.name} className="icon" />
                        <span className="text">{category.name}</span>
                    </div>

                    {/* Subcategories - Show when active */}
                    {activeCategory === category.name ? (
                        <ul className="subCategory">
                            {category.subcategories.map((sub, i) => (
                                <li key={i}>
                                    <Link to={`/category/${category.name.toLowerCase()}/${sub.toLowerCase()}`}>{sub}</Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="subCategory hidden"></ul>
                    )}

                </div>
            ))}
        </div>
    );
}
