import React from 'react'
import Img3 from '../img/Img3.jpg'
import Img4 from '../img/Img4.jpg'
import Img1 from '../img/Img1.webp'
import Img2 from '../img/Img2.webp'


const Content = () => {
    return (
        <div className='flex justify-center items-center
          bg-white h-29 font-mono py-20 grid-cols-2 gap-4'>
                <img src={Img3} className='h-36 rounded mb-20 shadow' />
                <img src={Img4} className='h-36 rounded mb-20 shadow' />
                <img src={Img1} className='h-36 rounded mb-20 shadow' />
                <img src={Img2} className='h-36 rounded mb-20 shadow' />

            <div className='flex flex-col justify-center items-center'>
         

            </div>


        </div>
    )
}

export default Content