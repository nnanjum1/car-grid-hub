import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f14] text-white px-4">

            <h1 className="text-7xl font-extrabold text-cyan-400">404</h1>


            <p className="mt-4 text-xl text-slate-300 text-center">
                Oops! The page you are looking for does not exist.
            </p>

            <p className="mt-2 text-sm text-slate-500 text-center">
                It might have been moved or deleted.
            </p>


            <Link
                href="/"
                className="mt-6 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
                Back to Home
            </Link>

        </div>
    )
}

export default NotFound