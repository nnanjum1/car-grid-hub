import React from "react";
import { toast } from "react-toastify";
import CarClient from "./CarClient";
import Link from "next/link";

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
        { cache: "no-store" }
    );



    const car = await res.json();

    console.log(id);
    console.log(car);

    return (
        <div className="min-h-screen bg-[#090d11] text-white px-4 py-10">



            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 ">


                <div className="rounded-2xl overflow-hidden bg-slate-900">

                    <img
                        src={car.imageUrl}
                        alt={car.name}
                        className="w-full h-full object-cover"
                    />
                </div>


                <div>
                    <Link href={`/edit/${car._id}`}>
                        <button className=" bg-slate-800 hover:bg-slate-700 text-white text-sm px-4 py-2 rounded-lg transition">
                            Edit Details
                        </button>
                    </Link>
                    <h1 className="text-3xl font-bold">{car.name}</h1>

                    <p className="text-slate-400 mt-2">
                        {car.type} • {car.seats} Seats
                    </p>

                    <p className="mt-4 text-slate-300 leading-relaxed">
                        {car.description}
                    </p>

                    <div className="mt-6 space-y-2 text-sm text-slate-400">
                        <p>Pickup Location: {car.location}</p>
                        <p> Availability: {car.availability}</p>
                        <p> Bookings: {car.booking_count}</p>
                    </div>

                    <div className="my-6  text-2xl font-bold text-cyan-400">
                        ${car.rentPrice}{" "}
                        <span className="text-sm text-slate-400">/day</span>
                    </div>

                    <CarClient car={car} />
                </div>
            </div>

        </div >


    );
};

export default CarDetailsPage;