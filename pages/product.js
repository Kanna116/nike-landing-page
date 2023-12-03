import React, { useState } from 'react'
import Image from 'next/image'
import nikeImage from './nike-home-page-image 1.png'

const product = (props) => {

    const theme = props.theme
    return (
        <div className={theme ? 'dark' : 'light'}>
            <div className='product  w-full  flex items-center justify-between mt-16 font-secondary'>
                <div className='.product-right  w-1/2  h-full bg-black-100 flex items-start justify-center flex-col pl-32 gap-6'>
                    <h1 className='text-9xl uppercase font-primary select-none'>Nike</h1>
                    <h4 className='text-xl select-none'>[ Nike ] delivers innovative products, experiences and services to  inspire atheletes.</h4>
                    <div className={`price  h-32 w-2/3 pl-16 flex items-center justify-center  -translate-x-32 ${theme ? 'light' : 'dark'}`}>
                        <h1 className={`text-3xl ${theme ? 'text-black bg-white' : 'text-white bg-black'}`}>Buy @ <span className='font-primary font-bold'>$699</span></h1>
                    </div>

                </div>

                <div className='.product-left w-1/2 h-full bg-black-100 '>
                    <Image
                        src={nikeImage}
                        className='object-contain w-full h-full p-5  '
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    )
}

export default product