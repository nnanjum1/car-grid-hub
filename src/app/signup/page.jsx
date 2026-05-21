"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        photo: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const minLength = password.length >= 6;

        if (!minLength || !hasUpperCase || !hasLowerCase) {
            return "Password must be at least 6 characters, include uppercase and lowercase letter.";
        }

        return null;
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.photo) newErrors.photo = "Photo URL is required";

        const passwordError = validatePassword(form.password);
        if (passwordError) newErrors.password = passwordError;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const { error } = await authClient.signUp.email({
            email: form.email,
            password: form.password,
            name: form.name,
            image: form.photo,
        });

        if (error) {
            const msg = (error.message || "").toLowerCase();

            if (msg.includes("exists") || msg.includes("already")) {
                toast.error("This email is already registered");
            } else {
                toast.error(error.message || "Registration failed");
            }
            return;
        }

        toast.success("Registration successful!");
        router.push("/login");
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
                    Register Account
                </h1>

                <form onSubmit={handleRegister} className="space-y-4">


                    <div>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full p-3 bg-slate-900 rounded-lg"
                        />
                        {errors.name && (
                            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>


                    <div>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 bg-slate-900 rounded-lg"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>


                    <div>
                        <input
                            name="photo"
                            value={form.photo}
                            onChange={handleChange}
                            placeholder="Photo URL"
                            className="w-full p-3 bg-slate-900 rounded-lg"
                        />
                        {errors.photo && (
                            <p className="text-red-400 text-sm mt-1">{errors.photo}</p>
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
                            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-cyan-500 text-black font-bold py-3 rounded-lg"
                    >
                        Sign Up
                    </button>
                </form>


                <button
                    className="w-full mt-4 bg-green-500 py-3 rounded-lg font-semibold"
                    onClick={googleSignIn}
                >
                    Continue with Google
                </button>

                <p className="text-sm text-center mt-4 text-slate-400">
                    Already have an account?{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="text-cyan-400 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>


        </div>
    );
}