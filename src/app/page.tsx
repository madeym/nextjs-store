"use client"
import Navbar from '@/_components/navbar'
import { useEffect } from 'react'
import { tns } from 'tiny-slider'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Autoplay, EffectFade } from 'swiper/modules'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='w-100 relative'>
        <div className='absolute flex flex-col top-[300px] left-[100px]'>
          <span className='text-[80px] font-semibold'>YOUR</span>
          <span className='text-[80px] font-semibold'>EVERYDAY</span>
          <span className='text-[80px] font-semibold'>FASHION.</span>
          <div className="flex items-center relative w-100">
            <input type="text" placeholder="Search ..." className="w-full text-[24px] border-2 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 px-4" />
            <i className="bi bi-search absolute end-4 text-gray-400 text-[24px] cursor-pointer hover:scale-105"></i>
          </div>
        </div>

        <img src="/assets/homepage-top.jpg" alt="" />
      </div>

      <h2 id='ProductSection' className='text-[40px] font-semibold mt-[40px] text-center'>Our Products</h2>

      <div className='w-100 flex justify-center gap-10 p-4'>
        <div className='flex flex-col gap-2 mt-[30px] w-fit cursor-pointer transition-all hover:scale-110'>
          <div>
            <img src="/assets/hoempage-tshirt.jpg" className='h-[500px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]' alt="" />
          </div>
          <div className='px-2 flex flex-col items-center'>
            <span className='font-semibold text-[30px]'>T-shirt</span>
            <span className='font-semibold text-[20px] text-gray-400'>15 collection</span>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-[30px] w-fit cursor-pointer transition-all hover:scale-110'>
          <div>
            <img src="/assets/homepage-hoodie.jpg" className='h-[500px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]' alt="" />
          </div>
          <div className='px-2 flex flex-col items-center'>
            <span className='font-semibold text-[30px]'>Hoodie</span>
            <span className='font-semibold text-[20px] text-gray-400'>coming soon</span>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-[30px] w-fit cursor-pointer transition-all hover:scale-110'>
          <div>
            <img src="/assets/homepage-totebag.jpg" className='h-[500px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]' alt="" />
          </div>
          <div className='px-2 flex flex-col items-center'>
            <span className='font-semibold text-[30px]'>Tote Bag</span>
            <span className='font-semibold text-[20px] text-gray-400'>coming soon</span>
          </div>
        </div>
      </div>

      <h2 id='NewReleaseSection' className='text-[40px] font-semibold mt-[40px] text-center'>New Release</h2>

      <div className='w-[70%] mx-auto rounded-2xl flex justify-center gap-2 mt-[50px] backdrop-blur-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-[100px]'>
        <div className='w-[70%] p-4 flex flex-col'>
          <span className='text-[40px] font-semibold'>Heartbreak Collection Vol.1</span>
          <span className='text-justify text-[20px] mt-[20px]'>us tempus. Morbi vehicula condimentum nisl at lacinia. Sed at metus in tellus rhoncus aliquam. Sed egestas, sapien consequat faucibus efficitur, metus erat ultrices sapien, vel ornare nibh enim non mauris. Pellentesque at semper sapien. Quisque ultricies porttitor tincidunt. Donec at dolor ipsum. Aenean sodales scelerisque ipsum, vitae egestas augue. Sed condimentum turpis ut pharetra ornare. Aliquam ultrices, massa eget semper ornare, velit sapien tempus tellus, vel consectetur tellus lectus sit amet urna. Aliquam sed eros euismod, tempor mauris nec, aliquam neque. Praesent dui velit, porttitor cursus tristique eget. us tempus. Morbi vehicula condimentum nisl at lacinia. Sed at metus in tellus rhoncus aliquam. Sed egestas, sapien consequat faucibus efficitur, metus erat ultrices sapien, vel ornare nibh enim non mauris. Pellentesque at semper saeros euismod, tempor mauris nec, aliquam neque. Praesent dui velit, porttitor cursus tristique eget.</span>
          <button className="] bg-gray-400 text-white font-bold py-2 px-4 rounded-lg w-[200px] flex gap-3 justify-center items-center mt-[20px]">
            <i className="bi bi-arrow-right text-bold text-[24px] mt-1"></i>
            <span className='text-[20px]'>See More</span>
          </button>
        </div>
        <div className='w-[30%]'>
          <Swiper
            modules={[Autoplay, EffectFade]}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            effect='fade'
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
          >
            <SwiperSlide><img src="/assets/t-shirt/sample/1/1.jpg" alt="" className='rounded-r-2xl h-[620px]' /></SwiperSlide>
            <SwiperSlide><img src="/assets/t-shirt/sample/1/2.jpg" alt="" className='rounded-r-2xl h-[620px]' /></SwiperSlide>
            <SwiperSlide><img src="/assets/t-shirt/sample/1/3.jpg" alt="" className='rounded-r-2xl h-[620px]' /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  )
}
