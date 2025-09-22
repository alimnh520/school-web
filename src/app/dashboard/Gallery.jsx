'use client';

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Trash2, UploadCloud } from 'lucide-react';

export default function GalleryUpload({ dark, active }) {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);

    const MAX_SIZE = 3 * 1024 * 1024; // 3MB


    async function fetchImages() {
        try {
            const res = await fetch('/api/gallery', { method: 'GET' });
            const data = await res.json();
            if (data.success) setImages(data.message || []);
        } catch (err) {
            console.error(err);
            toast.error('গ্যালারি লোড করতে সমস্যা হয়েছে', { position: "bottom-right" });
        }
    }

    useEffect(() => {
        fetchImages();
    }, []);

    function onFileChange(e) {
        const f = e.target.files?.[0];
        if (!f) return;
        if (f.size > MAX_SIZE) {
            toast.error('⚠️ ছবির সাইজ 3MB এর বেশি হতে পারবে না', { position: "bottom-right" });
            e.target.value = '';
            setFile(null);
            return;
        }
        setFile(f);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!file) {
            toast.error('একটি ছবি সিলেক্ট করুন', { position: "bottom-right" });
            return;
        }
        setLoading(true);
        try {
            const fd = new FormData();
            fd.append('image', file);
            fd.append('caption', caption);
            fd.append('description', description);

            const res = await fetch('/api/gallery', { method: 'POST', body: fd });
            const data = await res.json();
            if (data.success) {
                toast.success('✅ ছবি আপলোড করা হয়েছে', { position: "bottom-right" });
                setFile(null);
                setCaption('');
                setDescription('');
                // refresh list
                fetchImages();
                // reset file input visually
                const fileInput = document.getElementById('gallery-file-input');
                if (fileInput) fileInput.value = '';
            } else {
                toast.error(data.message || 'আপলোডে সমস্যা হয়েছে', { position: "bottom-right" });
            }
        } catch (err) {
            console.error(err);
            toast.error('সার্ভার এরর হয়েছে', { position: "bottom-right" });
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id, image_id) {
        if (!confirm('আপনি কি নিশ্চিত ডিলেট করতে চান?')) return;
        try {
            const res = await fetch('/api/gallery', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, image_id }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('🗑️ ছবি ডিলেট হয়েছে', { position: "bottom-right" });
                setImages((prev) => prev.filter((p) => p._id !== id));
            } else {
                toast.error(data.message || 'ডিলেটে সমস্যা হয়েছে', { position: "bottom-right" });
            }
        } catch (err) {
            console.error(err);
            toast.error('ডিলেটে সার্ভার এরর', { position: "bottom-right" });
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold text-green-600">🖼️ গ্যালারি আপলোড</h1>

            <form onSubmit={handleSubmit} className="bg-white dark:text-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-2">ছবি (max 3MB)</label>
                        <input
                            id="gallery-file-input"
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                            className="w-full text-sm file:border-0 dark:text-black file:bg-green-50 file:px-3 file:py-1 file:rounded-md"
                        />
                        {file && (
                            <div className="mt-3">
                                <p className="text-sm text-gray-600">নাম: {file.name}</p>
                                <p className="text-sm text-gray-600">সাইজ: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                        )}
                    </div>

                    <div className="md:col-span-2 space-y-3">
                        <div>
                            <label className="block text-sm font-medium mb-1">ক্যাপশন</label>
                            <input
                                type="text"
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                placeholder="ছবির হেডলাইন / ক্যাপশন"
                                className="w-full p-2 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">বিবরণ</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="ছবির বিস্তারিত বিবরণ (ঐচ্ছিক)"
                                rows={3}
                                className="w-full p-2 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                            >
                                <UploadCloud className="w-4 h-4" />
                                {loading ? 'আপলোড হচ্ছে...' : 'আপলোড করুন'}
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setFile(null);
                                    setCaption('');
                                    setDescription('');
                                    const fi = document.getElementById('gallery-file-input');
                                    if (fi) fi.value = '';
                                }}
                                className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded"
                            >
                                রিসেট
                            </button>

                            <p className="text-sm text-gray-500 ml-auto">
                                সর্বোচ্চ সাইজ: <strong>3MB</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </form>

            {/* Uploaded list */}
            <div className="bg-white dark:text-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">আপলোডকৃত ছবি ({images.length})</h2>

                {images.length === 0 ? (
                    <p className="text-gray-500">কোনো ছবি নেই</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {images.map((img) => (
                            <div key={img._id} className="flex gap-3 items-start border rounded p-2 bg-gray-50 dark:bg-gray-700">
                                <img src={img.product_image || img.image || img.url} alt={img.caption || 'image'} className="w-28 h-20 object-cover rounded" />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800 dark:text-gray-100">{img.caption || '—'}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">{img.description || 'কোনো বিবরণ নেই'}</p>
                                    <p className="text-xs text-gray-400 mt-1">{new Date(img.createdAt || img.created_at || img.created).toLocaleString()}</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button onClick={() => handleDelete(img._id, img.image_id)} className="p-2 bg-red-500 text-white rounded">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <ToastContainer position="bottom-right" />
        </div>
    );
}
