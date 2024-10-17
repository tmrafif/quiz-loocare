// import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex h-full bg-secondary">
            <div className="flex flex-col justify-center w-1/2 p-12">
                <h1 className="max-w-lg py-4 text-5xl font-semibold">
                    Welcome to Our Website!
                </h1>
                <p className="py-4 text-lg leading-relaxed">
                    Halo semuanya! Website ini bertujuan untuk membagikan
                    informasi kepada kalian mengenai pentingnya memiliki toilet
                    yang bersih, cara menjaga kebersihan toilet, dan bahayanya
                    toilet yang kotor. Selain itu, di dalam website ini terdapat
                    sebuah mini-game yang asik dan dapat kalian coba, lho.
                </p>
                <Link to="/info">
                    <button className="w-32 h-12 mt-4 text-lg rounded-md bg-primary hover:brightness-75">
                        More
                    </button>
                </Link>
            </div>

            <div className="w-1/2">
                <img
                    src="/home-background.jpg"
                    alt="Home"
                    className="object-cover h-full overflow-hidden"
                />
            </div>
        </div>
    );
};

export default HomePage;
