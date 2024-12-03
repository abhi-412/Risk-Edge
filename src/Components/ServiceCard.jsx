import React from 'react'

const ServiceCard = ({title,description,img,color}) => {
  return (
        <div className={`h-[380px] w-[300px] md:h-[430px] border md:min-w-[340px] min-w-[200px] hover:scale-105 transition duration-300  border-gray-300 shadow-xl dark:shadow-gray-500 flex flex-col gap-2 items-center justify-start p-5 text-gray-800 dark:text-gray-200 dark:hover:text-gray-300 hover:text-gray-900`}  style={{"--clr": "#A020F0"}}>
            <img className='w-full object-contain h-auto' src={img} alt="" />
            <h1 className='h5 text-center'>{title}</h1>
            {/* <h2 className='h6 '>Item-3 Tagline to be used.</h2>  */}
            <p className='body-2'>{description}</p>
        </div>
  )
}

export default ServiceCard
