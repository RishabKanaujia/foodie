import React from 'react'

const OpenCard = () => {
  return (
    <div className='bg-[#FDD9D9] flex flex-col justify-center items-center rounded-[16px] p-20 mx-28 my-20'>
        <h1 className='text-[52px] font-bold text-[#311f09] '>Hungry? We are open now..</h1>
        <div className="py-5 flex gap-5">
          <button className="bg-[#f54748] rounded-[16px] font-semibold text-[20px] text-white h-[72px] px-12">Order now</button>
          <button className="bg-[#FEECEC] rounded-[16px] font-semibold text-[20px] text-[#f54748] h-[72px] px-12">Reservation</button>
        </div>
    </div>
  )
}

export default OpenCard