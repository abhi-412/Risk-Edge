import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Ebooks as Resources } from '../utils/Ebooks';
import Breadcrumb from '../Components/BreadCrumb';

const Ebooks = () => {

    const location = useLocation();
    const slug = location.pathname.split('/')[2]
    console.log(slug);
    const [curResource,setCurResource] = useState({})

    useEffect(()=>{
        for(let i=0;i<Resources.length; i++){
            console.log(Resources[i].href);
            
            if(Resources[i].href === `/resources/${slug}`){
            setCurResource(Resources[i]);
            }
        }
    },[slug])
    
    // const curResource = Resources.forEach((r)=>{return  r.href ===`/resources/${slug}`})

    console.log(curResource);
    

  return (
    <div className='py-20 text-gray-800 bg-gray-100 dark:text-gray-200 dark:bg-gray-900'>
      <div className='py-8 max-w-7xl mx-auto flex flex-col gap-4 px-3'>
        <div className='flex flex-col gap-6 text-blue-600 max-w-5xl'>
          <h1 className='h3'>{curResource?.title}</h1>
          <Breadcrumb
            bg='blue-500'
            items={[
              { label: 'Home', href: '/', isCurrent: false },
              { label: curResource?.category, href: `/${curResource?.category}`, isCurrent: false },
              { label: curResource?.title, href: `/${curResource?.href}`, isCurrent: true },
            ]}
          />
        </div>
      </div>

      <section className='grid grid-cols-3 gap-4 my-16 max-w-7xl mx-auto p-3'>
        <div className='col-span-3 md:col-span-2 flex flex-col gap-5 bg-white dark:bg-gray-950 p-12 shadow-md'>
          <h1 className='h2'>{curResource?.category?.slice(0,curResource?.category?.length-1)} : {curResource?.title}</h1>
          <h3 className='h6'>{curResource?.details?.subTitle}</h3>

          <div className='flex flex-col gap-6'>
            <p className='body-2'>
              {curResource?.details?.p1}
            </p>

            <p className='body-2'>
              {curResource?.details?.p2}
            </p>
          </div>

          <div className='my-4 flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <img
                src={curResource?.details?.img}
                className='w-full md:w-2/3 object-contain'
                alt='PFE Diagram'
              />
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>{curResource?.category === "E-book" ? "Whats Inside?":""}</h4>
              
              <p className='body-2'>{curResource?.details?.whatsInside?.p1}</p>
              <p className='body-2'>
              {curResource?.details?.whatsInside?.p2}
              </p>
              {curResource?.details?.whatsInside?.list && <ul className='flex flex-col gap-2 list-disc ml-5'>
                {curResource?.details?.whatsInside?.list?.map((l,i)=>{
                    return <li key={i} className='body-2'>{l}</li>
                }
              )}
              </ul>
              
              }
            </div>

            <div className='flex flex-col gap-5'>
              <p className='body-2'><span className='font-extrabold'>
              You can request this {curResource?.category?.slice(0,curResource?.category?.length-1)} by filling up the form on the side with your name and email ID and we’ll email you this e-book within the day!  </span>&nbsp; If you are an existing subscriber from Energy / Commodity company, you don’t need to fill this form again, you’ll receive this Whitepaper in your registered email id !</p>
              <p className='body-2 font-extrabold'>
              Please note that our Publications are shared selectively only with people from Energy / Commodity / Banking / Financial Services companies. We frequently get requests from generic domains (like gmail, yahoo, etc.) and sometimes, despite our best efforts to verify their identities, we are unable to do so. Such requests unfortunately have to be declined. So we would request you to use your official email id for downloading our publications – and be assured that you’re in good company !
              </p>
              <p className='body-2 font-extrabold'>
              Download Requests from vendors / consultants are also taken up separately, and approved only if there is a viable business case for doing so. Please write in separately to us on info@riskedgesolutions.com – we read and respond to every personalized email !
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Ebooks
