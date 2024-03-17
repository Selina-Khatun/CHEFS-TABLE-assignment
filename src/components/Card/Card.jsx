import React from 'react';
import PropTypes from 'prop-types';
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineFire } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
const Card = ({ card,handleAddCard }) => {
    // console.log(card);
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = card;

    
    return (
        <div>
            <div className="card p-4 m-2 bg-base-100 border h-[99%] rounded-lg">
                <div className=''>
                <figure className= "rounded-xl ">
                    <img src={card.recipe_image} alt="Shoes" className= "h-48 w-full" />
                </figure>
                </div>
                <div className="card-body  p-1">
                    <h1 className="card-title text-xl font-bold py-1 text-left">{card.recipe_name}</h1>
                    <p className="  text-gray-500 py-2 text-left">{card.short_description}</p>
                    <hr className='' />
                    <div className='text-left'>
                        <h1 className='text-lg font-bold  text-gray-600'>Ingredients:{card.ingredients.length}</h1>
                        <ul className='list-disc ml-10 text-gray-500'>
                            {card.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <hr className='' />

                    <div className=" flex gap-1 text-sm justify-between items-center">
                        <div className='flex items-center gap-2'>
                        <FaRegClock />

                            <h6>{card.preparing_time}  minutes</h6>
                        </div>

                        <div className='flex items-center gap-2'>
                        <AiOutlineFire />
                            <h6>{card.calories}  calories</h6>
                        </div>
                    </div>

                    <div className="card-actions text-start">
                        <button onClick={() => handleAddCard(card)} className="btn hover:bg-green-300 rounded-full bg-green-600 px-[9%] text-white my-4 py-2">Want to Cook</button>
                   <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddCard:PropTypes.func
}
export default Card;