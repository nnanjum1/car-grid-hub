"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function AddCarForm() {
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

    const handleChange = (e) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const car = Object.fromEntries(formData.entries())
        console.log(car)

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })

        if (!res.ok) {
            throw new Error("Failed to add car");
        }

        const data = await res.json();
        console.log(data);

        toast.success("Car added successfully");

        e.target.reset();
        setCarData({
            name: "",
            rentPrice: "",
            type: "",
            imageUrl: "",
            seats: "",
            location: "",
            description: "",
            availability: "Available",
        });


    };

    return (
        <div className=" bg-[#0f141a]/70"> <div className="max-w-3xl mx-auto py-12  ">
            <h2 className="text-3xl font-bold text-white mb-6">Add New Car</h2>

            <form onSubmit={handleSubmit} className="space-y-6">


                <div>
                    <label className="text-slate-300">Car Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g., Toyota Corolla"
                        value={carData.name}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                        required
                    />
                </div>


                <div>
                    <label className="text-slate-300">Daily Rent Price ($)</label>
                    <input
                        type="number"
                        name="rentPrice"
                        placeholder="e.g., 50"
                        value={carData.rentPrice}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                        required
                    />
                </div>


                <div>
                    <label className="text-slate-300">Car Type</label>
                    <select
                        name="type"
                        value={carData.type}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                        required
                    >
                        <option value="">Select Type</option>
                        <option>SUV</option>
                        <option>Sedan</option>
                        <option>Hatchback</option>
                        <option>Luxury</option>
                        <option>Electric</option>
                        <option>Hybrid</option>
                        <option>Convertible</option>
                    </select>
                </div>


                <div>
                    <label className="text-slate-300">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Upload to imgbb/postimage and paste link"
                        value={carData.imageUrl}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                        required
                    />
                </div>

                <div>
                    <label className="text-slate-300">Seat Capacity</label>
                    <input
                        type="number"
                        name="seats"
                        placeholder="e.g., 5"
                        value={carData.seats}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                        required
                    />
                </div>


                <div>
                    <label className="text-slate-300">Pickup Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="e.g., Dhaka Airport"
                        value={carData.location}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                        required
                    />
                </div>


                <div>
                    <label className="text-slate-300">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        placeholder="Write details about the car..."
                        value={carData.description}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="text-slate-300">Availability Status</label>
                    <select
                        name="availability"
                        value={carData.availability}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-900 border border-slate-700 rounded-xl text-white"
                    >
                        <option>Available</option>
                        <option>Unavailable</option>

                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl transition"
                >
                    Add Car
                </button>
            </form>
        </div></div>
    );
}