import React from 'react'
import Breadcrumb from '../Components/BreadCrumb'
import { caseStudies } from '../utils/CaseStudies'

const CaseStudies = () => {
  return (
    <div className='py-16 text-gray-800 dark:text-gray-200 dark:bg-gray-900'>
   <div className='w-full bg-indigo-50  dark:bg-gray-950'>
    <div className='py-12 max-w-7xl mx-auto flex flex-col gap-4 px-3 '>
      <div className='flex flex-col gap-6 text-gray-700  dark:text-white max-w-5xl'>
        <h1 className='h2'>Client Case Studies</h1>
        <Breadcrumb
          bg='gray-500 dark:text-gray-100'
          items={[
            { label: 'Home', href: '/', isCurrent: false },
            { label: 'Client Case Studies', href: '/client-case-studies', isCurrent: true },
          ]}
        />
      </div>
    </div>

   </div>

    <section className='gap-4 my-16 max-w-7xl mx-auto p-3'>
      <div className='flex flex-col gap-5'>
        {/* <h1 className='h2'>Credit Risk Management</h1> */}
        <h3 className='h5'>Following Case Studies are brief details of our Product / project Implementations for some of our clients:</h3>

        <div className='grid grid-cols-3 gap-4 max-w-7xl mx-auto p-3'>
            <div className='col-span-3 md:col-span-2 flex flex-col gap-10'>
                {caseStudies.map((cs,i)=>{
                    return <div id={`${cs.link.slice(2,cs.link.length)}`} key={i} className='flex flex-col gap-3'>
                    <h4 className='h3'>{i+1}. {cs.description.name}</h4>
                    <h6 className='h7'>{cs.description.type}</h6>
                    <img
                      src={cs.img}
                      className='w-full md:w-2/3 object-contain mb-4'
                      alt='PFE Diagram'
                    />
                    <p className='body-1'>{cs.description.subhead}.</p>
                    <h6 className="h7">{cs.description.context}</h6>

                    <ul className='flex flex-col gap-2 list-disc ml-5'>
                        {cs.description?.introduction?.map((inPoint,i)=>{
                            return <li key={10 + i} className='body-2'>{inPoint}</li>
                        })}
                    </ul>
                    <h6 className='h6 my-2'>THE PROBLEM</h6>
                    <ul className='flex flex-col gap-2 list-disc ml-5'>
                        {cs.description?.problem?.map((inPoint,i)=>{
                            return <li key={10 + i} className='body-2'>{inPoint}</li>
                        })}
                    </ul>

                    <h6 className='h6 my-2'>PROJECT CHALLANGES</h6>
                    <ul className='flex flex-col gap-2 list-disc ml-5'>
                        {cs.description?.challenges?.map((inPoint,i)=>{
                            return <li key={10 + i} className='body-2'>{inPoint}</li>
                        })}
                    </ul>

                    <h6 className='h6 my-2 flex items-center gap-1'>THE SOLUTION</h6>
                    <ul className='flex flex-col gap-2 list-disc ml-5'>
                        {cs.description?.solution?.map((inPoint,i)=>{
                            return <li key={10 + i} className='body-2'>{inPoint}</li>
                        })}
                    </ul>

                  </div>
                })}
            </div>

            <div className='col-span-3 md:col-span-2 mt-6'>
                <p className='h3'>If you would like to have more information about the client or the project, please <span className='text-blue-500 hover:text-blue-600'><a href="mailto:info@riskedgesolutions.com"> write to us</a></span> with your details and we’ll let you know !</p>
            </div>
        </div>


      </div>
    </section>

  </div>
  )
}

export default CaseStudies
