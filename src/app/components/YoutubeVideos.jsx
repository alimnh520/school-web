import React from 'react'

const YoutubeVideos = () => {
    return (
        <div className='h-96 grid grid-cols-3 gap-6 p-6 bg-gray-50'>
            <div className="col-span-2 ">
                <iframe className='w-full h-96' src="https://www.youtube.com/embed/r114YdDGeVQ?si=YZZymLTcZijk8V1r" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="">
                <iframe className='w-full h-60' src="https://www.youtube.com/embed/SjefET6W3q4?si=JpOW56gICRYlbL_f" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default YoutubeVideos