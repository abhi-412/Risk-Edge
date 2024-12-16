import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, EffectCards, Keyboard, Pagination } from 'swiper/modules';
import { caseStudies } from '../utils/CaseStudies';


const CaseStudy = ({c,index}) => {
  return (

    <Swiper
        slidesPerView={1}
        effect={'cards'}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              keyboard={{
                enabled: true,
              }}
        modules={[EffectCards,Pagination,Keyboard,Autoplay]}
        className="mySwiper w-full h-full flex items-center justify-center "
      >
        
        <div className='max-w-6xl overflow-hidden md:w-[56rem] mx-auto flex flex-col items-center justify-center relative'>
            {caseStudies.map((c,i)=>{
                return <SwiperSlide className='p-4 ' key={i}> <div  className={`grid grid-cols-2 shadow-2xl shadow-gray-500 dark:shadow-gray-900 gap-4 md:p-8 p-5 bg-white dark:bg-gray-950 dark:text-white lg:p-12 text-black rounded-md lg:max-w-3xl sm:max-w-xl max-w-sm mx-auto justify-center items-center`}>
                            <img className=' h-48 object-contain md:col-span-1 col-span-2' src={c.img} alt="" />
                            <div className='col-span-2 md:col-span-1 flex w-full h-full flex-col gap-2 items-start justify-start'>
                            <h1 className='h5'>{c.title}</h1>
                            <p className='body-2'>{c.desc}</p>
                            <a className='text-blue-500 text-xs sm:text-sm md:text-base' href={`/client-case-studies${c.link}`}>Read More</a>
                        </div>
                    </div>
                </SwiperSlide>
            })}
        </div>
        

        

      </Swiper>
   
      
  )
}

export default CaseStudy
