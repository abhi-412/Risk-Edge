import React from 'react'
import images from '../utils/images'
import { title } from 'process'
import Breadcrumb from '../Components/BreadCrumb';
import Footer from '../Components/Footer';

const Services = ({solution}) => {
    

  return (
    <div className='mt-20  text-gray-800 '>
        <div className='py-8 max-w-7xl mx-auto flex flex-col gap-4 px-3'>
            <div className='flex flex-col gap-6 text-blue-600  max-w-5xl'>
                <h1 className='h3'>{solution.title}</h1>
                <Breadcrumb bg="blue-500" items={[{ label: 'Home', href: '/', isCurrent: false }, { label: solution.title, href: `/${solution.slug}`, isCurrent: true }]} />
            </div>
        </div>


            <section className='grid grid-cols-3 gap-4 my-16 max-w-7xl mx-auto p-3'>
                <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
                    <h1 className="h2">{solution.title}</h1>
                    <h3 className="h5">{solution.subtitle}</h3>

                    <div className='flex flex-col gap-6'>
                        <img src={solution.mainImg} className='md:w-2/3 w-full object-contain' alt="" />
                        <p className="body-2 italic">{solution.imgDescription}</p>
                    </div>
                    <div className='my-4 flex flex-col'>
                    {
                        solution?.content?.map((c,i)=>{
                            return <div className='flex flex-col gap-3' key={i}>
                                <h4 className='h5'>{c.head}</h4>
                                {c?.p ? <p className="body-2">{c.p}</p> : ""}
                                {c.p1 ? <ul className='flex flex-col gap-2 list-disc ml-5'>
                                    <li className='body-2'>{c.p1}</li>
                                    
                                    {c.p2 ? <li className='body-2'>{c.p2}</li> : "" }
                                    {c.p3 ? <li className='body-2'>{c.p3}</li> : "" }
                                    {c.p4 ? <li className='body-2'>{c.p4}</li> : "" }
                                    {c.p5 ? <li className='body-2'>{c.p5}</li> : "" }
                                </ul> : ""}
                                <img src={c.img} className='md:w-1/3 w-full object-contain my-4' alt="" />


                            </div>
                        })
                     }
                    </div>
                </div>

            </section>

            <Footer />

      
    </div>
  )
}

export default Services
