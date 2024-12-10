import React from 'react'

const CustomInput = ({onChange,onBlur,onFocus,value,name,labelFor,title,required,type}) => {
  return (
        <div className="relative shadow-md dark:bg-gray-950">
                <input 
                type={type}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                required={required}
                id={name}
                name={name}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-950 outline-none dark:text-white border bg-transparent shadow-md rounded-none border-1 border-gray-500 appearance-none  peer" placeholder=" "
                >
                </input>
                <label htmlFor={labelFor} className="absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-4 scale-75 top-2 z-1 origin-[0] dark:bg-gray-950  px-2 peer-focus:px-2 peer-focus:bg-gray-300 dark:peer-focus:bg-black peer-focus:text-black dark:peer-focus:text-white font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{title}</label>

            </div>
          
  )
}

export default CustomInput
