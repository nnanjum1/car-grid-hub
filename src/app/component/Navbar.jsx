"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Explore Cars", href: "/explore" },
        { name: "Add Car", href: "/add-car" },
        { name: "My Bookings", href: "/my-bookings" },
    ];

    return (
        <nav className="relative bg-[#0f141a]/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="flex items-center justify-between h-20">


                    <div className="flex items-center gap-3">

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition"
                        >
                            {isOpen ? "✕" : "☰"}
                        </button>

                        <Link
                            href="/"
                            className="text-2xl font-extrabold tracking-tight text-white"
                        >
                            CarGrid<span className="text-cyan-400">Hub</span>
                        </Link>
                    </div>


                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>


                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/login"
                            className="px-5 py-2 rounded-xl text-sm font-semibold text-white border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="px-5 py-2 rounded-xl bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-600 transition"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>


            {isOpen && (
                <div className="md:hidden absolute left-0 top-20 w-full bg-[#0f141a] border-t border-slate-800 p-4 shadow-lg z-50">

                    <div className="flex flex-col space-y-4">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-slate-300 hover:text-white"
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 rounded-lg text-center text-white border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-center font-semibold hover:bg-cyan-600 transition"
                        >
                            Sign Up
                        </Link>

                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;