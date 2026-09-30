import React from 'react'

const Heading = ({intro,text,para,className}) => {
  return (
    <>
      <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-blue-600">
          {intro}
          </p>
            <h2 className={`text-4xl text-center text-black font-bold font-pop  ${className}`}>{text}</h2>
  <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          {para}
          </p>
    </>
  )
}

export default Heading