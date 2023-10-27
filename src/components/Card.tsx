type CardTypes = {
  image: string,
  text: string,
  price: string,
  storage: string,
  warranty: string,
  upgrade: string,
  name: string
}

const Card = (props: CardTypes) => {
  return (
    <>
      <div className='w-full border shadow-xl flex flex-col p-4 md:my-8 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={props.image} alt="Single card" />
          <h2 className='text-2xl font-bold text-center py-8'>{props.text}</h2>
          <p className='text-center text-4xl font-bold'>{props.price}</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>{props.storage}</p>
            <p className='py-2 border-b mx-8'>{props.warranty}</p>
            <p className='py-2 border-b mx-8'>{props.upgrade}</p>
          </div>
          <button className={props.name}>Start Trial</button>
        </div>
    </>
  )
}

export default Card