import React, { useState } from 'react'
import faqData from '../data/faqData'
import Haeding from '../component/Heading'

import { motion } from "framer-motion";
const Faq = () => {

  const [open, setOpen] = useState(null)

  const handleOpen = (index) => {
    setOpen(open === index ? null : index)
  }

  return (
   <section id="faq" className="mt-14 pb-16">
<div className="mx-auto w-full max-w-4xl px-4">

    {/* Heading */}
    <div className="mb-10 text-center">
      <Haeding para='Frequently Asked Questions' text="FAQ" />

    
    
    </div>

    {/* FAQ */}
    <div className="flex flex-col gap-4">

      {faqData.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
        >

          {/* Question */}
          <button
            onClick={() => handleOpen(index)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold transition hover:bg-gray-50"
          >
            <span className="text-2xl font-semibold font-pop">
              {item.ques}
            </span>

            <span className="text-2xl font-semibold font-pop">
              {open === index ? "−" : "+"}
            </span>
          </button>

          {/* Answer */}
          {open === index && (
            <div className="border-t border-gray-200 px-6 py-5 text-xl font-normal font-pop leading-7 text-gray-600">
              {item.Ans}
            </div>
          )}

        </motion.div>
      ))}

    </div>

  </div>
</section>
  )
}

export default Faq