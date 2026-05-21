import React from 'react'

const Banner = () => {
    return (
        <section className="w-full  bg-gray-900 text-white py-24 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Find Your Perfect Ride
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Browse from a wide selection of cars and book instantly at the best prices.
                </p>

                <a
                    href="/cars"
                    className="bg-cyan-400 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200"
                >
                    Explore Cars
                </a>
            </div>
        </section>
    )
}

export default Banner