import React from 'react'

const Hero = () => {
  return (
    <main className='w-5/5 h-100vh'>
        <div className='flex'>
        <div className='w-1/4 h-[50vh]  bg-[url(/1f.png)] bg-cover'>
            <h1 className='p-4 text-grey-500 text-2xl font-bold '> Скидки -6% на все букеты по предзаказу  на 8 марта</h1>
        </div>
        <div className='w-1/4 h-[full]  bg-[url(/2f.png)] bg-cover'>
        <h1 className='text-grey-600 p-6 text-3xl font-bold'>Розы</h1>
        </div>
        <div className='w-1/4 h-[full]  bg-[url(/3f.png)] bg-cover'>
            <h1 className='p-6 text-grey-900 text-3xl font-bold '>Подарки</h1>
        </div>
        <div className='w-1/4 h-[full]  bg-[url(/4f.png)] bg-cover'></div>
        <div className='w-1/4 h-[full]  bg-[url(/5f.png)] bg-cover'></div>
        </div>
        
    </main>
  )
}

export default Hero
