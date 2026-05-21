import React from 'react'

const WhyChoose = () => {
    return (
        <section className="py-20 px-4 bg-gray-900 ">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                    Why Choose CarGridHub?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="p-6 bg-[#0f141a] border border-slate-800 rounded-xl">
                        <h3 className="text-xl font-bold text-cyan-400 mb-2">
                            Easy Booking
                        </h3>
                        <p className="text-slate-400">
                            Book your favorite cars in just a few clicks with a smooth user experience.
                        </p>
                    </div>

                    <div className="p-6 bg-[#0f141a] border border-slate-800 rounded-xl">
                        <h3 className="text-xl font-bold text-cyan-400 mb-2">
                            Affordable Prices
                        </h3>
                        <p className="text-slate-400">
                            Get the best rental prices without any hidden charges.
                        </p>
                    </div>

                    <div className="p-6 bg-[#0f141a] border border-slate-800 rounded-xl">
                        <h3 className="text-xl font-bold text-cyan-400 mb-2">
                            Trusted Service
                        </h3>
                        <p className="text-slate-400">
                            Verified cars and trusted owners ensure safe and reliable rides.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyChoose