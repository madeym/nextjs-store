"use client"
import Navbar from '@/_components/navbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Autoplay, EffectFade } from 'swiper/modules'
import Typed from 'typed.js'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const slogan = new Typed('#sloganText', {
      strings: ['FIND YOUR <i>Character</i>', 'FIND YOUR <i>Style</i>', 'YOUR <br> EVERYDAY <br> FASHION.',],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false
    });

    return () => {
      slogan.destroy();
    }
  }, [])

  return (
    <main>
      <Navbar />
      <div className='w-100 relative'>
        <div className='absolute h-[100%] flex left-10 items-center lg:left-[100px]'>
          <span id='sloganText' className='text-[24px] md:text-[30px] lg:text-[50px] font-semibold'></span>
        </div>

        <img src="/assets/homepage-top.jpg" alt="" />
      </div>

      {/* Our Product */}
      <h2 id='ProductSection' className='text-[24px] lg:text-[30px] font-semibold mt-8 text-center'>Our Products</h2>

      <div className='w-100 flex flex-col sm:flex-row items-center justify-center sm:gap-4 lg:gap-10 p-4'>
        <div className='flex flex-col gap-2 mt-4 w-fit cursor-pointer transition-all hover:scale-110'>
          <div>
            <img src="/assets/hoempage-tshirt.jpg" className='h-[500px] sm:h-[300px] lg:h-[500px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]' alt="" />
          </div>
          <div className='px-2 flex flex-col items-center'>
            <span className='font-semibold text-[20px]'>T-shirt</span>
            <span className='font-semibold text-[18px] text-gray-300'>15 collection</span>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-4 w-fit cursor-pointer transition-all hover:scale-110'>
          <div>
            <img src="/assets/homepage-hoodie.jpg" className='h-[500px] sm:h-[300px] lg:h-[500px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]' alt="" />
          </div>
          <div className='px-2 flex flex-col items-center'>
            <span className='font-semibold text-[20px]'>Hoodie</span>
            <span className='font-semibold text-[18px] text-gray-300'>coming soon</span>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-4 w-fit cursor-pointer transition-all hover:scale-110'>
          <div>
            <img src="/assets/homepage-totebag.jpg" className='h-[500px] sm:h-[300px] lg:h-[500px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]' alt="" />
          </div>
          <div className='px-2 flex flex-col items-center'>
            <span className='font-semibold text-[20px]'>Tote Bag</span>
            <span className='font-semibold text-[18px] text-gray-300'>coming soon</span>
          </div>
        </div>
      </div>

      <h2 id='NewReleaseSection' className='text-[24px] lg:text-[30px] font-semibold mt-8 text-center'>New Release</h2>

      <div className='w-[90%] lg:w-[70%] mx-auto rounded-2xl flex justify-between gap-2 mt-10 backdrop-blur-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-[100px]'>
        <div className='w-[60%] lg:w-[70%] p-4 flex flex-col'>
          <span className='text-[20px] font-semibold'>Heartbreak Collection Vol.1</span>
          <span className='hidden lg:block text-justify text-[18px] mt-[20px]'>us tempus. Morbi vehicula condimentum nisl at lacinia. Sed at metus in tellus rhoncus aliquam. Sed egestas, sapien consequat faucibus efficitur, metus erat ultrices sapien, vel ornare nibh enim non mauris. Pellentesque at semper sapien. Quisque ultricies porttitor tincidunt. Donec at dolor ipsum. Aenean sodales scelerisque ipsum, vitae egestas augue. Sed condimentum turpis ut pharetra ornare. Aliquam ultrices, massa eget semper ornare, velit sapien tempus tellus, vel consectetur tellus lectus sit amet urna. Aliquam sed eros euismod, tempor mauris nec, aliquam neque. Praesent dui velit, porttitor cursus tristique eget. us tempus. Morbi vehicula condimentum nisl at lacinia. Sed at metus in tellus rhoncus aliquam. Sed egestas, sapien consequat faucibus efficitur, metus erat ultrices sapien, vel ornare nibh enim non mauris. Pellentesque at semper saeros euismod, tempor mauris nec, aliquam neque. Praesent dui velit, porttitor cursus tristique eget.</span>
          <span className='block lg:hidden text-justify text-[18px] mt-[20px]'>us tempus. Morbi vehicula condimentum nisl at lacinia. Sed at metus in tellus rhoncus aliquam. Sed egestas, sapien consequat faucibus efficitur, metus erat ultrices sapien, vel ornare nibh enim non mauris. Pellentesque at semper sapien. Quisque ultricies porttitor tincidunt. Donec at dolor ipsum. Aenean sodales scelerisque ipsum, vitae egestas augue. Sed condimentum turpis ut pharetra ornare. Aliquam ultrices, massa eget semper ornare, velit sapien tempus tellus, vel consectetur..</span>
          <button className="] bg-gray-400 text-white font-bold py-2 px-4 rounded-lg w-[150px] flex gap-3 justify-center items-center mt-[20px]">
            <i className="bi bi-arrow-right text-bold text-[18px] mt-1"></i>
            <span className='text-[18px]'>See More</span>
          </button>
        </div>
        <div className='w-[40%] lg:w-[30%]'>
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
