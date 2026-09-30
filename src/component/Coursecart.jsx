import React from 'react'
import Image from './Image'


const Coursecart = ({img}) => {
  return (
    <div className="flex flex-wrap gap-5 w-[400px]">
  
  
  <Image className='w-full' src={img}/>
</div>
  )
}

export default Coursecart