import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards,setCards]=useState([]);
useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setCards(data))
},[])

    return (
        <div className='md:w-2/3 border-2 grid grid-cols-1 md:grid-cols-2'>
            {/* <h1>cards:{cards.length}</h1> */}

            {
                cards.map(card=><Card
                card={card}
                key={card.id}
                ></Card>)
            }
            
        </div>
    );
};

export default Cards;