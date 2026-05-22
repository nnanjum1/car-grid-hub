import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-[#0f141a]/90 border-t border-slate-800 text-slate-400">

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">


                <div>
                    <h2 className="text-2xl font-bold text-white">
                        CarGrid<span className="text-cyan-400">Hub</span>
                    </h2>

                    <p className="mt-3 text-sm text-slate-400">
                        Find, explore, and book your favorite cars easily with CarGridHub.
                        Fast, simple, and reliable car rental platform.
                    </p>

                    <div className="flex gap-4 mt-5 text-xl">
                        <a href="#" className="hover:text-cyan-400 transition">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition">
                            <FaGithub />
                        </a>
                    </div>
                </div>


                <div>
                    <h3 className="text-white font-semibold mb-4">Useful Links</h3>

                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
                        <li><Link href="/explore" className="hover:text-cyan-400">Explore Cars</Link></li>
                        <li><Link href="/add-car" className="hover:text-cyan-400">Add Car</Link></li>
                        <li><Link href="/my-bookings" className="hover:text-cyan-400">My Bookings</Link></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Information</h3>

                    <p className="text-sm mb-2">
                        📍 Sylhet, Bangladesh
                    </p>

                    <p className="text-sm mb-2">
                        📞 +880 1234567891
                    </p>

                    <p className="text-sm mb-2">
                        📧 support@cargridhub.com
                    </p>

                    <p className="text-sm">
                        ⏰ 24/7 Customer Support
                    </p>
                </div>
            </div>

            <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} CarGridHub. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer