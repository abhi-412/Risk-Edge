import React from 'react'

const ServiceCard = ({title,description,img,color}) => {
  return (
        <div className={`h-[380px] w-[300px] md:h-[430px]  bg-white md:min-w-[350px] min-w-[200px] dark:bg-gray-900 dark:shadow-gray-500 flex flex-col gap-2 items-center justify-start p-8 text-gray-800 dark:text-gray-200 dark:hover:text-gray-300 hover:text-gray-900`}  style={{"--clr": "#A020F0"}}>
            <img className='w-full object-contain h-auto' src={img} alt="" />
            <h1 className='h5 text-center'>{title}</h1>
            {/* <h2 className='h6 '>Item-3 Tagline to be used.</h2>  */}
            <p className='body-2'>{description}</p>
        </div>
  )
}
export default ServiceCard
