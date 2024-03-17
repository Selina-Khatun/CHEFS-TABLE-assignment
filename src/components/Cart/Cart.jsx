import React, { useState } from 'react';
import Current from './Current';

const Cart = ({ selectedCards, handlePrepared, preparedCards }) => {

    return (
        <div className='border md:w-1/3 h-auto'>

            <h1 className='text-2xl font-bold'>Want to cook: {selectedCards.length}</h1>
            <hr className='m-2' />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>

                        </tr>
                    </thead>

                    {
                        selectedCards.map((selectedCard, index) => (
                            <tbody key={index}>
                                {/* row 1 */}
                                <tr className="bg-base-200">
                                    <th >{index + 1}</th>
                                    <td>{selectedCard.recipe_name}</td>
                                    <td>{selectedCard.preparing_time}</td>
                                    <td>{selectedCard.calories}</td>
                                    <td><button onClick={() => handlePrepared(selectedCard.id,selectedCard)} className="btn hover:bg-green-300 rounded-3xl bg-green-600 px-[9%] text-white">Preparing</button></td>
                                </tr>

                            </tbody>
                        ))
                    }


                </table>

            </div>
            <Current
                selectedCards={selectedCards}
                preparedCards={preparedCards}
            ></Current>
        </div>
    );
};

export default Cart;