import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const EbookCard = ({ebook,bg}) => {
  
  return (
    <div className={`py-8 md:px-12 px-6 max-w-[19rem] md:max-w-[22rem] border-2  hover:bg-white flex flex-col gap-5 hover:-translate-y-10 transition duration-300 justify-evenly  ${bg} rounded-2xl items-start`}>
        <h3 className='h5 '>{ebook.title}</h3>
        <p className='body-2'>{`${ebook.details?.p1?.slice(0,260)}...`}</p>
        <Link to={ebook.href} className='text-black dark:text-white flex md:text-base text-sm items-center gap-2'>Read<BsArrowRight className='text-xl' /></Link>
      
    </div>
  )
}

export default EbookCard
