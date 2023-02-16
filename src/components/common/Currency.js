import React from 'react'

const Currency = ({flag, currency, bg, border}) => {
  return (
    <div class="">
    <button className={`flex justify-center items-center gap-x-1.5 text-lightest-white-bg ${bg} border ${border} hover:bg-light-green hover:border-light-green py-3 2xl:py-3 px-3 rounded-full uppercase text-sm`}>
       {flag} 
       <span>{currency}</span>
    </button>
  </div>
  )
}

export default Currency