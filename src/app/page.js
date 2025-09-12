'use client'
import InfoPage from "./components/AboutCard";
import Animation from "./components/Animation";
import NoticeAndLinks from "./components/Notice";
import SchoolSections from "./components/SchoolSections";
import YoutubeVideos from "./components/YoutubeVideos";
import Footer from "./layout/Footer";

const page = () => {

  return (
    <div className='mx-auto flex flex-col w-10/12 gap-y-5 bg-white px-4 pt-4'>
      <Animation />
      <SchoolSections />
      <NoticeAndLinks />
      <InfoPage />
      <YoutubeVideos />
      <Footer/>
    </div>
  )
}

export default page