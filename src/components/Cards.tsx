import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from './Card'

const Cards = () => {
  return (
    <div id='cards' className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card image={Single} text={"Single User"} price={"$149,90"} storage={"500 GB Storage"} warranty={"1 User Allowed"} upgrade={"Send up to 2 GB"} name={"bg-[--theme-color] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"} />
        <Card image={Double} text={"Partnership"} price={"$199,90"} storage={"1 TB Storage"} warranty={"3 User Allowed"} upgrade={"Send up to 10 GB"} name={"text-[--theme-color] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"} />
        <Card image={Triple} text={"Group Account"} price={"$299,90"} storage={"5 TB Storage"} warranty={"10 Users Allowed"} upgrade={"Send up to 20 GB"} name={"bg-[--theme-color] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"} />
      </div>
    </div>
  )
}

export default Cards