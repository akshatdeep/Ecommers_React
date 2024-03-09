import React from 'react'
import eximg  from './assets/exclusive_image.png'

function Offers() {
  return (
    <div className='w-full h-[60vh] mt-[15vw] px-[6vw]'>
        <div className='h-full w-full bg-[#FCE7F3] flex '>

            <div className='left h-full w-1/2 flex flex-col justify-center '>
                <h1 className='text-[3vw] leading-[4vw] font-semibold pl-[5vw]'>Exclusive <br /> Offers For You</h1>
                <p className='pl-[5vw] my-[1vw] text-[1vw] font-semibold ]'>ONLY ON BEST SELLING PRODUCTS </p>
                <button className=' mt-[4vw]  ml-[5vw] w-[10vw] py-[.8vw] px-[vw] bg-red-500 uppercase rounded-full text-white font-semibold'>check now</button>
            </div>
            <div className="right left h-full w-1/2 px-[10vw]">
                <img className='h-[100%] object-cover' src={eximg} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Offers