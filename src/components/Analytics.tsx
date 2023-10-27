import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-[#fff] py-16 px-4'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
        <div className='flex flex-col justify-center'>
          <p className='text-[--theme-color] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p className=''>In today's data-driven business landscape, managing data analytics centrally has become a critical practice for organizations seeking to harness the power of data for informed decision-making and competitive advantage. </p>
          <button className='bg-black text-[--theme-color] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><a href="#cards">Our Solutions</a></button>
        </div>
      </div>
    </div>
  )
}

export default Analytics