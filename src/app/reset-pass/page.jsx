"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function ResetPasswordPage() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSendCode = async () => {
        try {
            const res = await fetch('/api/admin/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = res.json();
        } catch (error) {
            console.log(error);
        }
    }

    const handleSetPass = async () => {
        try {
            const res = await fetch('/api/admin/reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ otp, pass, confirmPass })
            });
            const data = res.json();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-yellow-200 p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="shadow-2xl rounded-2xl border border-yellow-200">
                    <CardContent className="p-8">
                        <div className="flex flex-col items-center mb-6">
                            <div className="bg-yellow-500 text-white p-4 rounded-full shadow-lg mb-4">
                                <Lock size={32} />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800 text-center">
                                পাসওয়ার্ড রিসেট করুন
                            </h1>
                            <p className="text-gray-600 text-sm mt-1">
                                {step === 1
                                    ? "প্রতিষ্ঠানের ইমেইল দিন, এবং কোড পাঠান"
                                    : "ইমেইলে পাওয়া কোড এবং নতুন পাসওয়ার্ড দিন"}
                            </p>
                        </div>

                        {step === 1 ? (
                            <form
                                className="space-y-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setStep(2);
                                }}
                            >
                                <div>
                                    <label className="text-sm font-medium text-gray-700">ইমেইল</label>
                                    <Input type="email" placeholder="প্রতিষ্ঠানের ইমেইল লিখুন" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" required />
                                </div>

                                <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl py-2 text-lg shadow">
                                    কোড পাঠান
                                </Button>
                            </form>
                        ) : (
                            <form
                                className="space-y-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("✅ পাসওয়ার্ড সফলভাবে রিসেট হয়েছে!");
                                }}
                            >
                                <div>
                                    <label className="text-sm font-medium text-gray-700">ইমেইল কোড</label>
                                    <Input type="text" placeholder="যে কোড ইমেইলে এসেছে তা লিখুন" value={otp} onChange={(e) => setOtp(e.target.value)} className="mt-1" required />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">নতুন পাসওয়ার্ড</label>
                                    <Input type="password" placeholder="নতুন পাসওয়ার্ড" value={pass} onChange={(e) => setPass(e.target.value)} className="mt-1" required />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-700">পাসওয়ার্ড আবার লিখুন</label>
                                    <Input type="password" placeholder="নিশ্চিত করুন" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className="mt-1" required />
                                </div>

                                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-2 text-lg shadow">
                                    পাসওয়ার্ড পরিবর্তন করুন
                                </Button>
                            </form>
                        )}

                        <div className="text-center mt-4 text-sm text-gray-600">
                            <a href="/login" className="text-yellow-700 hover:underline">
                                লগইন পেজে ফিরে যান
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
