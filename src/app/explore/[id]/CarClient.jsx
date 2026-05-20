"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function CarClient({ car }) {
    const [open, setOpen] = useState(false);
    const [driver, setDriver] = useState("No");
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);

    const handleBooking = async () => {
        try {
            setLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/cars/book/${car._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        driverNeeded: driver,
                        specialNote: note,
                    }),
                }
            );

            if (!res.ok) {
                throw new Error("Booking failed");
            }

            toast.success("Booking Successful!");

            setOpen(false);
            setDriver("No");
            setNote("");

        } catch (error) {
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <button
                onClick={() => setOpen(true)}
                className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 rounded-xl transition"
            >
                Book Now
            </button>


            {open && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-[#0f141a] w-[90%] max-w-md p-6 rounded-xl border border-slate-700">

                        <h2 className="text-xl font-bold mb-4">
                            Book This Car
                        </h2>


                        <label className="text-sm text-slate-400">
                            Driver Needed
                        </label>
                        <select
                            value={driver}
                            onChange={(e) => setDriver(e.target.value)}
                            className="w-full p-2 mt-1 bg-slate-900 rounded mb-4"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>


                        <label className="text-sm text-slate-400">
                            Special Note
                        </label>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="w-full p-2 mt-1 bg-slate-900 rounded mb-4"
                            rows={3}
                            placeholder="Write any special requirement..."
                        />


                        <div className="flex gap-3 mt-4">

                            <button
                                onClick={() => setOpen(false)}
                                className="w-1/2 bg-slate-700 py-2 rounded text-white"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleBooking}
                                disabled={loading}
                                className="w-1/2 bg-cyan-500 text-black font-bold py-2 rounded hover:bg-cyan-600 transition"
                            >
                                {loading ? "Booking..." : "Book Now"}
                            </button>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}