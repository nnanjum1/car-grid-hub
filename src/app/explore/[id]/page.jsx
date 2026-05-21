"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import CarClient from "./CarClient";
import DeleteModal from "@/app/component/DeleteModal";

export default function CarDetailsPage({ params }) {
    const { id } = use(params);
    const router = useRouter();

    const [car, setCar] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch car");
                }

                const data = await res.json();

                if (!data || data.success === false) {
                    throw new Error("Invalid car data");
                }

                setCar(data);
            } catch (err) {
                console.error(err);
                toast.error("Failed to load car details");
            }
        };

        fetchCar();
    }, [id]);

    const handleDelete = async () => {
        try {
            setLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!res.ok) throw new Error();

            toast.success("Car deleted successfully");

            setShowDelete(false);

            router.push("/explore");
        } catch (err) {
            toast.error("Delete failed");
        } finally {
            setLoading(false);
        }
    };

    if (!car) return <div className="text-white p-10">Loading...</div>;

    return (
        <div className="min-h-screen bg-[#090d11] text-white px-4 py-10">



            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 ">


                <div className="rounded-2xl overflow-hidden bg-slate-900">

                    <img
                        src={car.imageUrl}
                        alt={car.name}
                        className="w-full h-full object-fit"
                    />
                </div>


                <div>


                    <div className="flex gap-3 mb-6">

                        <Link href={`/edit/${car._id}`}>
                            <button className="bg-slate-800 px-4 py-2 rounded-lg">
                                Edit
                            </button>
                        </Link>

                        <button
                            onClick={() => setShowDelete(true)}
                            className="bg-red-600 px-4 py-2 rounded-lg"
                        >
                            Delete
                        </button>

                    </div>

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


            <DeleteModal
                show={showDelete}
                onClose={() => setShowDelete(false)}
                onConfirm={handleDelete}
                loading={loading}
            />
        </div>
    );
}