import React from "react";

const YoutubeVideos = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Video */}
                <div className="lg:col-span-2">
                    <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-t-4 border-red-500">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/r114YdDGeVQ?si=YZZymLTcZijk8V1r"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Side Videos */}
                <div className="flex flex-col gap-6">
                    <div className="relative w-full h-48 sm:h-60 rounded-2xl overflow-hidden shadow-lg border-t-4 border-blue-500">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/SjefET6W3q4?si=JpOW56gICRYlbL_f"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="relative w-full h-48 sm:h-60 rounded-2xl overflow-hidden shadow-lg border-t-4 border-green-500">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/bxYF3d7t4gk?si=AbCdEfGhIjKlmNOP"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YoutubeVideos;
