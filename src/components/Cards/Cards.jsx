import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from '../Card/Card';


const Cards = ({handleAddCard}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className='md:w-2/3  grid grid-cols-1 md:grid-cols-2'>
            {/* <h1>cards:{cards.length}</h1> */}

            {
                cards.map(card => <Card
                    card={card}
                    key={card.id}
                    handleAddCard={handleAddCard}
                ></Card>)
            }

        </div>
    );
};
Cards.propTypes = {
   
    handleAddCard:PropTypes.func
}
export default Cards;