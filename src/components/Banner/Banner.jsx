import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div id='banner' className="hero  min-h-screen ">

            <div className="hero-content text-center text-neutral-content">
                <div className="md:max-w-3xl">
                    <h1 className="mb-5 md:text-5xl font-bold">Discover an exceptional cooking
                        class tailored for you!</h1>
                    <p className="mb-5">Simply Recipes is a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from</p>
                    <button className="btn hover:bg-green-500 rounded-full bg-green-600 border-none px-8 mr-2 text-white ">Explore Now</button>
                    <button className="btn btn-outline  border-white text-white hover:text-black hover:bg-white px-8 ml-5 rounded-full">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;