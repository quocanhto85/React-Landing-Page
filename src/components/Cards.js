import React from "react"
import CardItem from "./CardItem"
import "./Card.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations !</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-3.jpg"
                            text="Explore the edge of the world"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali ain Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
