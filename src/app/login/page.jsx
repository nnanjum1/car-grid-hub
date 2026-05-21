"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        let newErrors = {};

        if (!form.email) newErrors.email = "Email is required";
        if (!form.password) newErrors.password = "Password is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            const { error } = await authClient.signIn.email({
                email: form.email,
                password: form.password,
            });

            if (error) {
                toast.error(error.message || "Invalid email or password");
                return;
            }

            toast.success("Login successful!");
            router.push("/");
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0b0f14] text-white">
            <div className="w-full max-w-md p-6 bg-[#111827] rounded-xl">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Login Account
                </h1>

                <form onSubmit={handleLogin} className="space-y-4">

                    <div>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 bg-slate-900 rounded-lg"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>


                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full p-3 bg-slate-900 rounded-lg pr-10"
                        />

                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        {errors.password && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-cyan-500 text-black font-bold py-3 rounded-lg hover:bg-cyan-600 transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>


                <button
                    onClick={googleSignIn}
                    className="w-full mt-4 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold"
                >
                    Continue with Google
                </button>
                <p className="text-sm text-center mt-4 text-slate-400">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => router.push("/signup")}
                        className="text-cyan-400 cursor-pointer hover:underline"
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}