import React from 'react'

const Product = () => {
  return (
   <>
    <section className='w-4/4 h-[75vh]  bg-[url(/karta.png)] bg-cover'>
    <div className='w-1/3 h-[70vh]  bg-[url(/bumaga.png)] bg-cover float-right '>
    <div className='w-5/5 h-[20vh] bg-[url(https://fony-kartinki.ru/_ph/133/2/924251221.png?1709025883)] bg-cover '> </div>
    <div className='flex ml-6 gap-2'>
    <div className='p-1'><img src="/phone.png" alt="" /></div>
    <div className=''>
    <h1 className='font-bold'>телефон:</h1>
    <h1 className='flex-none text-grey-500'>+38 (063) 829 30 30 <br />
    +38 (067) 829 30 30</h1>
    </div>
    </div>
    <div className='flex ml-6 m-6 gap-2'>
    <div className='p-1'><img src="/skype.png" alt="" /></div>
    <div className=''>
    <h1 className='font-bold'>Skype</h1>
    <h1 className='flex-none text-grey-500'>Flowers with love</h1>
    </div>
    </div>
    <div className='flex ml-6 m-6 gap-2'>
    <div className='p-1'><img src="/pochta.png" alt="" /></div>
    <div className=''>
    <h1 className='font-bold'>Почта</h1>
    <h1 className='flex-none text-grey-500'>flowers.withlove05@gmail.com</h1>
    </div>
    </div>
    <img className='ml-16 m-6' src="/znak.png" alt="" />
    </div>
    </section>
    <footer className='bg-pink-100 bg-opacity-50 rounded-tl-lg rounded-tr-lg bg-grey-300'>
      <div className='flex justify-between'>
      <h1 className='font-bold text-pink-700'>ИНФОРМАЦИЯ</h1>
      <h1 className='font-bold text-pink-700'>СЛУЖБА ПОДДЕРЖКИ</h1>
      <h1 className='font-bold text-pink-700'>ЛИЧНЫЙ КАБИНЕТ</h1> 
      <h1 className='font-bold text-pink-700'>ДОПОЛНИТЕЛЬНО</h1>
      </div>
      <div className='flex justify-between m-3'>
        <h1 className='text-pink-500'>О НАС <br />
ДОСТАВКА И ОПЛАТА <br />
ПОЛИТИКА <br />КОНФИДЕНЦИАЛЬНОСТИ</h1>
    <h1 className='text-pink-500'>КАРТА САЙТА <br />
ВОЗВРАТ ТОВАРА <br />
СВЯЗАТЬСЯ С НАМИ <br />
ДЛЯ СОТРУДНИЧЕСТВА</h1>
    <h1 className='text-pink-500'>ЛИЧНЫЙ КАБИНЕТ <br />
ИСТОРИЯ ЗАКАЗА <br />
ЗАКЛАДКИ <br />
СПИСОК НОВОСТЕЙ</h1>
<h1 className='text-pink-500'>ПОДАРОЧНЫЕ <br />
СЕРТИФИКАТЫ <br />
АКЦИИ <br />
ЦВЕТЫ В ОФИС</h1>
      </div>
      <div className='flex justify-center bg-pink-200 gap-10'>
        <h1>Способы оплаты:</h1>
        <img className='w-25' src="/5c.png" alt="" />
        <img src="/1c.png" alt="" />
        <img src="/3c.png" alt="" />
        <img src="/2c.png" alt="" />
        <img src="/4c.png" alt="" />
      </div>
    </footer>
   </>
  )
}

export default Product