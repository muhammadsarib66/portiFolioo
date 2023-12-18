import React from 'react'

{/* <i class="fa-light fa-school"></i> */}
// icon title
//  navbar bnani hai jis me 4 links or 1 button

const TestingNav = () => {
  return (
    <section className=' flex justify-around items-center bg-white py-4 '>
<div className='flex items-center gap-3 '>
<i className="fa-solid fa-school  text-2xl text-blue-500  "></i>
    <p className='text-sky-300 font-bold text-2xl'>Mujtaba Academy </p>
</div>

<div className=''> 

    <ul className='flex gap-x-6 text-sm font-semibold cursor-pointer ' >
        <li className='hover:text-sky-300'>Home</li>
        <li className='hover:text-sky-300'>About</li>
        <li className='hover:text-sky-300'>Teacher</li>
        <li className='hover:text-sky-300'>Classes</li>
        


    </ul>
</div>

<div className=' '>
    <button className='bg-sky-300  rounded-full text-normal text-white px-5 py-1 hover:scale-125 duration-500 first-letter  hover:bg-amber-400 hover:shadow-xl shadow-amber-400'> Join Class</button>
</div>
    </section>
  )
}

export default TestingNav