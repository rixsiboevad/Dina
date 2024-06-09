import React from 'react'

const Section = () => {
  return ( 
    <>
    <h1 className='text-3xl font-bold m-6 text-center'>Акции</h1>
     <section className='flex gap-5 m-6 justify-center'>
    <div className='bg-pink-100 w-64 h-96'>
    <div className='w-64 h-[44vh]  bg-[url(/rose.png)] bg-cover'>
    <div className='w-12 h-[8vh]  bg-[url(/krug.png)] bg-cover'>
        <h1 className='p-3 font-bold'>-19%</h1>
    </div>
    </div>
    <div className='text-center p-4'>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border border-red-800 inline-flex items-center ">
  Закажи <br /> всего за 300тыс
</button>
    </div>
    </div>

    <div className='bg-pink-100 w-64 h-96'>
    <div className='w-64 h-[44vh]  bg-[url(/1a.png)] bg-cover'>
    <div className='w-12 h-[8vh]  bg-[url(/krug.png)] bg-cover'>
        <h1 className='p-3 font-bold'>-10%</h1>
    </div>
    </div>
    <div className='text-center p-4'>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border border-red-800 inline-flex items-center ">
  Закажи <br /> всего за 250тыс
</button>
    </div>
    </div>

    <div className='bg-pink-100 w-64 h-96'>
    <div className='w-64 h-[44vh]  bg-[url(/2a.png)] bg-cover'>
    <div className='w-12 h-[8vh]  bg-[url(/krug.png)] bg-cover'>
        <h1 className='p-3 font-bold'>-20%</h1>
    </div>
    </div>
    <div className='text-center p-4'>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border border-red-800 inline-flex items-center ">
  Закажи <br /> всего за 450тыс
</button>
    </div>
    </div>

    <div className='bg-pink-100 w-64 h-96'>
    <div className='w-45 h-[34vh]  bg-[url(/3a.png)] bg-cover'>
    <div className='w-12 h-[8vh]  bg-[url(/krug.png)] bg-cover'>
        <h1 className='p-3 text-yellow-600 font-bold'>-50%</h1>
    </div>
    </div>
    <div className='text-center p-4'>
        <h1 className='text-red-600'>Для тебя мега скидка</h1>
        <h1 className='font-bold text-red-900'>заставь любимых улыбнуться </h1>
    <button className="m-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border border-red-800 inline-flex items-center ">
всего за 400тыс
</button>
    </div>
    </div>
   </section>
    </>
  
  )
}

export default Section