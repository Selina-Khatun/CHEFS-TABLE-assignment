import React from 'react';

const Current = ({ preparedCards,totalCalories,totalTime }) => {
    // console.log("current", preparedCards)

    return (
        <div>
            <h1 className='text-2xl font-bold mt-5'>Currently cooking: {preparedCards.length}</h1>
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


                        </tr>
                    </thead>

                    {
                        preparedCards.map((preparedCard, index) => (
                            <tbody key={index}>
                                {/* row 1 */}
                                <tr className="bg-gray-100  border-b-gray-200">
                                    <th >{index + 1}</th>
                                    <td>{preparedCard.recipe_name}</td>
                                    <td>{preparedCard.preparing_time}</td>
                                    <td>{preparedCard.calories}</td>

                                </tr>

                            </tbody>
                        ))
                    }

                </table>
                <div className='pt-4'>
                    <div className='flex justify-around'>
                        <div></div>
                        <div>
                            <p>Total Time = </p>
                            <p>{totalTime} minutes</p>
                        </div>
                        <div>
                            <p>
                                Total Calories =
                            </p>
                            <p>{totalCalories} calories</p>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Current;