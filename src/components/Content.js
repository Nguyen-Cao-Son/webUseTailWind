import React from 'react'
import Img3 from '../img/Img3.jpg'
import Img4 from '../img/Img4.jpg'


const Content = () => {
    return (
        <div className='flex justify-center items-center
          bg-white h-18 font-mono py-20 grid-cols-2 gap-4'>
                <img src={Img3} className='h-min rounded mb-20 shadow' />
            <div className='flex flex-col justify-center items-center'>
                <img src={Img4} className='h-min rounded mb-20 shadow' />

            </div>


        </div>
    )
}

export default Content