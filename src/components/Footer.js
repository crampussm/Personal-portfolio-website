import React from 'react'

function Footer() {
  return (
    <div className='footer flex justify-start items-center mt-20 md:px-20 h-[40px] bottom-0 bg-color4 w-full'>
        <div className='md:w-[55%] w-full flex md:flex-row flex-col justify-between items-center'>
          <div className='footer-info text-color2 text-[12px] font-bold'>Developed and designed by Swaparup Mukherjee</div>
          <div className='footer-copyright text-color2 text-[12px] font-bold'>Copyright &#169; @2023</div>
        </div>
    </div>
  )
}

export default Footer