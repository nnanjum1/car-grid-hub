import React from 'react'

const ExploreCarPage = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cars`,
        { cache: "no-store" }
    );
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const cars = await res.json()
    console.log(cars)

    return (
        <div className="min-h-screen bg-[#090d11] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">


                <div className="border-b border-slate-800 pb-6 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-white tracking-tight">
                            Explore Available <span className="text-cyan-400">Cars</span>
                        </h1>
                        <p className="text-sm text-slate-400 mt-2">
                            Discover premium engineering, daily commuters, and luxury rides ready for immediate booking.
                        </p>
                    </div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest bg-[#0f141a] px-4 py-2 rounded-xl border border-slate-800">
                        Total Vehicles: <span className="text-cyan-400 font-bold ml-1">{cars.length}</span>
                    </div>
                </div>


                {cars.length === 0 ? (
                    <div className="text-center py-20 bg-[#0f141a] border border-dashed border-slate-800 rounded-2xl">
                        <p className="text-slate-400 text-lg">No vehicles found in the catalog.</p>
                    </div>
                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cars.map((car) => (
                            <div
                                key={car._id || car.name}
                                className="group bg-[#0f141a] border border-slate-800 rounded-xl p-4 hover:border-cyan-400 transition-all"
                            >
                                <div className="aspect-video rounded-lg overflow-hidden bg-slate-900">
                                    <img
                                        src={car.imageUrl}
                                        alt={car.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>

                                <h2 className="mt-4 text-lg font-bold text-white">{car.name}</h2>
                                <div className='flex justify-between'> <p className="text-slate-400 text-sm">{car.type}</p>
                                    <p className="mt-4 text-lg font-bold border border-white px-2 rounded inline text-white">{car.availability}</p>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-cyan-400 font-semibold">${car.rentPrice}</p>
                                    <button className="px-3 py-1 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExploreCarPage