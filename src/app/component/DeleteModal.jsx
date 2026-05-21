"use client";

import React from "react";

const DeleteModal = ({ show, onClose, onConfirm }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

            <div className="bg-[#111827] p-6 rounded-xl w-80 text-white shadow-xl">



                <p className="text-sm text-gray-300 mb-5">
                    Are you sure you want to delete this car? This action cannot be undone.
                </p>

                <div className="flex gap-6 justify-end">

                    <span
                        onClick={onClose}
                        className="cursor-pointer text-gray-400 hover:text-gray-200 transition px-2 py-1"
                    >
                        Cancel
                    </span>

                    <span
                        onClick={onConfirm}
                        className="cursor-pointer text-red-500 hover:text-red-400 transition font-semibold px-2 py-1"
                    >
                        Delete
                    </span>

                </div>
            </div>
        </div>
    );
};

export default DeleteModal;