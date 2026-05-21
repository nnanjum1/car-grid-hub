import React from 'react'

const HowWorks = () => {
    return (
        <section className="py-20 px-4 bg-[#0f141a]">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                    How It Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="p-6 bg-[#0b0f14] border border-slate-800 rounded-xl">
                        <div className="text-cyan-400 text-2xl font-bold mb-2">1</div>
                        <h3 className="text-xl font-bold text-white mb-2">Choose a Car</h3>
                        <p className="text-slate-400">
                            Browse available cars and select your perfect ride.
                        </p>
                    </div>

                    <div className="p-6 bg-[#0b0f14] border border-slate-800 rounded-xl">
                        <div className="text-cyan-400 text-2xl font-bold mb-2">2</div>
                        <h3 className="text-xl font-bold text-white mb-2">Book Instantly</h3>
                        <p className="text-slate-400">
                            Reserve your car with simple and fast booking.
                        </p>
                    </div>

                    <div className="p-6 bg-[#0b0f14] border border-slate-800 rounded-xl">
                        <div className="text-cyan-400 text-2xl font-bold mb-2">3</div>
                        <h3 className="text-xl font-bold text-white mb-2">Enjoy Ride</h3>
                        <p className="text-slate-400">
                            Pick up the car and enjoy your journey.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HowWorks