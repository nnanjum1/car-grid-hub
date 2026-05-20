"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditCarPage = ({ params }) => {
    const { id } = use(params);
    const router = useRouter();

    const [loading, setLoading] = useState(true);

    const [carData, setCarData] = useState({
        name: "",
        rentPrice: "",
        type: "",
        imageUrl: "",
        seats: "",
        location: "",
        description: "",
        availability: "Available",
    });


    useEffect(() => {
        if (!id) return;

        const fetchCar = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`
                );

                if (!res.ok) throw new Error("Car not found");

                const data = await res.json();

                setCarData({
                    name: data.name || data.carName || "",
                    rentPrice: data.rentPrice || data.dailyRentPrice || "",
                    type: data.type || data.carType || "",
                    imageUrl: data.imageUrl || "",
                    seats: data.seats || data.seatCapacity || "",
                    location: data.location || data.pickupLocation || "",
                    description: data.description || "",
                    availability: data.availability || data.availabilityStatus || "Available",
                });
            } catch (err) {
                toast.error("Failed to load car details");
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    const handleChange = (e) => {
        setCarData({
            ...carData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(carData),
                }
            );

            if (!res.ok) throw new Error();

            toast.success("Car updated successfully");
            router.push(`/explore/${id}`);
        } catch (err) {
            toast.error("Update failed");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-[#090d11]">
                <p className="text-sm font-semibold tracking-widest text-slate-500 animate-pulse uppercase">
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#090d11] text-white px-4 py-10">
            <div className="max-w-3xl mx-auto bg-[#0f141a] p-6 rounded-2xl border border-slate-800 shadow-xl">

                <h1 className="text-2xl font-bold text-cyan-400 mb-6">
                    Edit Car Details
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Car Name</label>
                        <input
                            name="name"
                            value={carData.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg outline-none focus:border-cyan-400 transition"
                            placeholder="Car Name"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Daily Rental Price ($)</label>
                            <input
                                name="rentPrice"
                                value={carData.rentPrice}
                                onChange={handleChange}
                                className="w-full p-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg outline-none focus:border-cyan-400 transition"
                                placeholder="Rent Price"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Type</label>
                            <input
                                name="type"
                                value={carData.type}
                                onChange={handleChange}
                                className="w-full p-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg outline-none focus:border-cyan-400 transition"
                                placeholder="Type"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Image URL</label>
                        <input
                            name="imageUrl"
                            value={carData.imageUrl}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg outline-none focus:border-cyan-400 transition"
                            placeholder="Image URL"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Seats</label>
                            <input
                                name="seats"
                                value={carData.seats}
                                onChange={handleChange}
                                className="w-full p-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg outline-none focus:border-cyan-400 transition"
                                placeholder="Seats"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Pickup Location</label>
                            <input
                                name="location"
                                value={carData.location}
                                onChange={handleChange}
                                className="w-full p-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg outline-none focus:border-cyan-400 transition"
                                placeholder="Location"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Description</label>
                        <textarea
                            name="description"
                            value={carData.description}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg outline-none focus:border-cyan-400 transition resize-none"
                            placeholder="Description"
                            rows={4}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Availability</label>
                        <select
                            name="availability"
                            value={carData.availability}
                            onChange={handleChange}
                            className="w-full p-3 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg outline-none focus:border-cyan-400 transition cursor-pointer"
                        >
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 rounded-xl transition cursor-pointer mt-2"
                    >
                        Update Car Details
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCarPage;