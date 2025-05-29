import React from 'react'

import p1 from '../../../assets/Partners/p1.png';
import p2 from '../../../assets/Partners/p2.png';
import p3 from '../../../assets/Partners/p3.png';
import p4 from '../../../assets/Partners/p4.png';
import p5 from '../../../assets/Partners/p5.png';
import p6 from '../../../assets/Partners/p6.png';



const Partner = () => {
  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-lime-400 text-center">Our Partners and collaborators</h2>
      <marquee>
        <div className='flex h-16 justify-evenly' >
         <img src={p1} alt="" />
         <img src={p2} alt="" />
         <img src={p3} alt="" />
         <img src={p4} alt="" />
         <img src={p5} alt="" />
         <img src={p6} alt="" />
        </div>
         

      </marquee>

      
    </section>
    
  )
}

export default Partner