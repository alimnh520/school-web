"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhotoVideo } from "react-icons/fa";

export default function GalleryPage() {
    const [photos, setPhotos] = useState([]);
    const [modalPhoto, setModalPhoto] = useState(null);
    const [videos] = useState([
        "https://www.youtube.com/embed/ysz5S6PUM-U",
        "https://www.youtube.com/embed/J---aiyznGQ",
    ]);

    useEffect(() => {
        async function fetchGallery() {
            try {
                const res = await fetch("/api/gallery");
                const data = await res.json();
                if (data.success) setPhotos(data.message);
            } catch (err) {
                console.log(err);
            }
        }
        fetchGallery();
    }, []);

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-green-600 mb-3">
                        📸 গ্যালারী
                    </h1>
                    <p className="text-gray-600 text-lg">
                        বিদ্যালয়ের স্মৃতিময় ছবি ও ভিডিও এখানে সংরক্ষিত।
                    </p>
                </header>

                {/* Photos */}
                <section className="mb-16">
                    {photos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {photos.map((photo, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition cursor-pointer"
                                    onClick={() => setModalPhoto(photo)}
                                >
                                    <img
                                        src={photo.product_image}
                                        alt={photo.caption}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-800 text-lg">
                                            {photo.caption}
                                        </h3>
                                        {photo.description && (
                                            <p className="text-sm text-gray-600 mt-1">
                                                {photo.description}
                                            </p>
                                        )}
                                        {photo.createdAt && (
                                            <p className="text-xs text-gray-400 mt-2">
                                                {new Date(photo.createdAt).toLocaleString("bn-BD", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">❌ কোনো ছবি পাওয়া যায়নি</p>
                    )}

                    {/* Modal for full image */}
                    {modalPhoto && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                            <div className="relative">
                                <button
                                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                                    onClick={() => setModalPhoto(null)}
                                >
                                    ✖️
                                </button>
                                <img
                                    src={modalPhoto.product_image}
                                    alt={modalPhoto.caption}
                                    className="max-h-[90vh] max-w-[90vw] object-contain rounded"
                                />
                                <div className="text-white mt-2 text-center">
                                    <p className="font-bold">{modalPhoto.caption}</p>
                                    {modalPhoto.description && <p>{modalPhoto.description}</p>}
                                    {modalPhoto.createdAt && (
                                        <p className="text-sm">
                                            {new Date(modalPhoto.createdAt).toLocaleString("bn-BD", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </section>


                {/* Videos */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-600 mb-6 text-center">
                        🎥 ভিডিও গ্যালারি
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {videos.map((link, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="overflow-hidden rounded-xl shadow-lg"
                            >
                                <iframe
                                    className="w-full h-64 rounded-lg"
                                    src={link}
                                    title={`Video ${idx + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
