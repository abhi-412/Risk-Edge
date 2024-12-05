import {React,useState} from 'react'
// import SkillCard from '../Components/SkillCard'
import { MdOutlineWorkHistory } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import images from '../utils/images';
import ServiceCard from './ServiceCard';




SwiperCore.use([Pagination]);


const services = [
    // {id:1,title:"Consulting & Training",
    //     description:"Our Consulting practice designs and implements solutions related to Predictive Analytics, Risk Management, Software Development.  Our Training vertical caters to custom requirements in Blockchain, Machine Learning and Risk Analytics."
    //     ,color:"yellow-400", img:images.prod1Img
    // },
    {id:2,title:"Apps to Solve Specific Problems",
        description:"Risk Edge’s Predictive Analytics Apps allow you to solve a specific set of problems. These apps are generally very light, are built using the latest technologies."
        ,color:"green-400", img:images.prod1Img
    },
    {id:3,title:"Advanced Analytics on Commodity Data",
        description:"MarketEdge is an AI driven web based solution that allows you to build advanced analytics on top of your global commodity and energy data."
        ,color:"blue-400", img:images.specificApp
    },
    {id:4,title:"Energy & Commodity Risk Management Software",
        description:"RiskEdge Software is a VaR (Value at Risk) based Commodity Risk Management System that provides Deeper Insights and Control on your business."
        ,color:"blue",img:images.domino
    },
    {id:5,title:"Plan Edge",
        description:"Plan Edge is a web-based Planning & Analysis Solution that uses AI to give users instantaneous insights throughout the year.",
        color:"blue",img:images.planEdge
    },
    {id:6,title:"Anomaly Detection",description:"Journal Entry Anomaly Detection Solution enables Internal Audit teams to use AI to detect old and emerging patterns in journal entries and flag those that deviate from a normal behavior."
        ,color:"blue",img:images.anomalyDetection
    },
    {id:7,title:"Predict Edge",
        description:"Predict Edge is a web-based solution that allows you to relate price and fundamental data using AI and forecast prices with greater accuracy."
        ,color:"blue",img:images.predictEdge,
    },

]



const Services = () => {
    const [swiper, setSwiper] = useState(null);

  return (
    <section id='skills' className='w-full py-10 flex items-center justify-center'>
        <div className=" w-full flex  flex-col gap-10 justify-center">

            <div className="flex items-center gap-10 justify-center flex-wrap">
            <Swiper className='w-full py-16 mySwiper '
            slidesPerView={1}
            breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                610:{
                  slidesPerView: 2,
                },
                775:{
                  slidesPerView: 2,
                },
                1050:{
                    slidesPerView:3,
                },
                1450:{
                  slidesPerView: 4,
                },
                2000:{
                    slidesPerView:5
                }
              }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              keyboard={{
                enabled: true,
              }}
              effect={'coverflow'}
              coverflowEffect={{
                rotate: 30,
                stretch: 20,
                depth: 40,
                modifier: 1,
                // slideShadows: true,
              }}
            modules={[Pagination,Keyboard,EffectCoverflow]}
        >
                {services.map((service,i)=>{
                    return<SwiperSlide key={i} className='flex items-center justify-center'>  <ServiceCard key={service.id} {...service}  /></SwiperSlide>
                })}

            </Swiper>

            </div>
            {/* <div className="flex justify-center gap-10 mt-5 items-center  rounded-full">
            <button
              className="button text-4xl  rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              <GrLinkPrevious className='dark:text-white'  />
            </button>
            <button
              className="button text-4xl  rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <GrLinkNext className='dark:text-white' />
            </button>
          </div> */}
        </div>
    </section>
  )
}

export default Services
