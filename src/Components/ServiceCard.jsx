import React from 'react'

const ServiceCard = ({title,description,img,color,handleMouseMove}) => {
  return (
        <div onMouseMove={handleMouseMove} className={`h-[380px] w-[300px] md:h-[500px] border md:min-w-[340px] min-w-[200px] border-gray-300 shadow-lg shadow-gray-300 flex flex-col gap-2 items-start justify-center p-5 text-gray-800 hover:text-gray-900`}  style={{"--clr": "#A020F0"}}>
            <img className='w-full object-contain h-auto' src={img} alt="" />
            <h1 className='h5 text-center'>{title}</h1>
            {/* <h2 className='h6 '>Item-3 Tagline to be used.</h2>  */}
            <p className='body-2'>{description}</p>
        </div>
  )
}

export default ServiceCard
