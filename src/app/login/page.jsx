'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { School } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            toast.success(data.message, { position: "bottom-right" });
            if (data.success) router.push('/dashboard');

        } catch (error) {
            toast.error("সার্ভারে সমস্যা!", { position: "top-center", autoClose: 500, });
            console.error("Login Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="shadow-2xl rounded-2xl border border-green-200">
                    <CardContent className="p-8">
                        <div className="flex flex-col items-center mb-6">
                            <div className="bg-green-500 text-white p-4 rounded-full shadow-lg mb-4">
                                <School size={32} />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800 text-center">
                                বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়
                            </h1>
                            <p className="text-gray-600 text-sm mt-1">ড্যাসবোর্ড লগইন করুন</p>
                        </div>

                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div>
                                <label className="text-sm font-medium text-gray-700">ইমেইল বা ইউজারনেম</label>
                                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ইমেইল / ইউজারনেম লিখুন" className="mt-1" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                                <Input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1" />
                            </div>

                            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-2 text-lg shadow">
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                                            ></path>
                                        </svg>
                                        লোড হচ্ছে...
                                    </>
                                ) : (
                                    "লগইন"
                                )}
                            </Button>
                        </form>

                        <div className="text-center mt-4 text-sm text-gray-600">
                            <p>পাসওয়ার্ড ভুলে গেছেন? <Link href="/reset-pass" className="text-green-600 hover:underline">রিসেট করুন</Link></p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            <ToastContainer />
        </div>
    );
}
