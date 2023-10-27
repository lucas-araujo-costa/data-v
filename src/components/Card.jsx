import React from 'react'

const Card = ({cardImage, cardText, cardValue, cardStorage, cardWarranty, cardUpgrade, classNameCard}) => {
  return (
    <>
      <div className='w-full border shadow-xl flex flex-col p-4 md:my-8 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={cardImage} alt="Single card" />
          <h2 className='text-2xl font-bold text-center py-8'>{cardText}</h2>
          <p className='text-center text-4xl font-bold'>{cardValue}</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>{cardStorage}</p>
            <p className='py-2 border-b mx-8'>{cardWarranty}</p>
            <p className='py-2 border-b mx-8'>{cardUpgrade}</p>
          </div>
          <button className={classNameCard}>Start Trial</button>
        </div>
    </>
  )
}

export default Card