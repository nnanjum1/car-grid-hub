"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const router = useRouter();

    const { data: session, isPending: loading } = authClient.useSession();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Explore Cars", href: "/explore" },
        { name: "Add Car", href: "/add-car" },
        { name: "My Bookings", href: "/my-bookings" },
    ];

    const handleLogout = async () => {
        await authClient.signOut();
        setDropdown(false);
        router.refresh();
        router.push("/");
    };

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

                        {!session && !loading && (
                            <>
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
                            </>
                        )}


                        {session && (
                            <div className="relative">

                                <button
                                    onClick={() => setDropdown(!dropdown)}
                                    className="flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg text-white"
                                >
                                    <img
                                        src={session.user.image || "/default.png"}
                                        className="w-8 h-8 rounded-full"
                                        alt="profile"
                                    />
                                    <span>{session.user.name}</span>
                                </button>

                                {dropdown && (
                                    <div className="absolute right-0 mt-2 w-52 bg-slate-900 border border-slate-700 rounded-lg shadow-lg text-white">

                                        <Link
                                            href="/add-car"
                                            className="block px-4 py-2 hover:bg-slate-800"
                                        >
                                            Add Car
                                        </Link>

                                        <Link
                                            href="/my-bookings"
                                            className="block px-4 py-2 hover:bg-slate-800"
                                        >
                                            My Bookings
                                        </Link>

                                        <Link
                                            href="/my-cars"
                                            className="block px-4 py-2 hover:bg-slate-800"
                                        >
                                            My Added Cars
                                        </Link>

                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 hover:bg-red-600 text-red-400"
                                        >
                                            Logout
                                        </button>

                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {
                isOpen && (
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

                            {!session && !loading && (
                                <>
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 rounded-lg text-center text-white border border-slate-700 hover:border-cyan-400"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-center font-semibold"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}


                            {session && (
                                <>

                                    <div className="flex items-center gap-3 px-2 py-3 border-b border-slate-700 mb-2">
                                        <img
                                            src={session.user.image || "/default.png"}
                                            className="w-10 h-10 rounded-full"
                                            alt="profile"
                                        />
                                        <div>
                                            <p className="text-white font-semibold text-sm">
                                                {session.user.name}
                                            </p>
                                            <p className="text-slate-400 text-xs">
                                                {session.user.email}
                                            </p>
                                        </div>
                                    </div>


                                    <Link
                                        href="/add-car"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 text-white"
                                    >
                                        Add Car
                                    </Link>

                                    <Link
                                        href="/my-bookings"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 text-white"
                                    >
                                        My Bookings
                                    </Link>

                                    <Link
                                        href="/my-cars"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 text-white"
                                    >
                                        My Added Cars
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="px-4 py-2 text-left text-red-400"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}

                        </div>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;