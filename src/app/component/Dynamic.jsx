import Link from 'next/link';
import React from 'react'

const Dynamic = async () => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cars`,
        { cache: "no-store" }
    );
    console.log(process.env.NEXT_PUBLIC_API_URL);


    const cars = await res.json()
    console.log(cars)

    return (
        <section className="py-16 bg-[#090d11] px-4">
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                    Available Cars
                </h2>

                {/* No Cars */}
                {cars.length === 0 ? (
                    <div className="text-center py-20 bg-[#0f141a] border border-dashed border-slate-800 rounded-2xl">
                        <p className="text-slate-400 text-lg">No vehicles found in the catalog.</p>
                    </div>
                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">


                        {cars.slice(0, 6).map((car) => (
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

                                <h2 className="mt-4 text-lg font-bold text-white">
                                    {car.name}
                                </h2>

                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-slate-400 text-sm">
                                        {car.type}
                                    </p>

                                    <p
                                        className={`text-sm font-bold border px-2 rounded ${car.availability === "Unavailable"
                                            ? "text-slate-400 border-slate-500"
                                            : "text-white border-white"
                                            }`}
                                    >
                                        {car.availability}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-cyan-400 font-semibold">
                                        ${car.rentPrice}{" "}
                                        <span className="text-sm text-slate-400">/day</span>
                                    </p>

                                    <Link href={`/explore/${car._id}`}>
                                        <button className="px-3 py-1 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Dynamic