import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from './Card'

const Cards = () => {
  return (
    <div id='cards' className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card cardImage={Single} cardText={"Single User"} cardValue={"$149,90"} cardStorage={"500 GB Storage"} cardWarranty={"1 User Allowed"} cardUpgrade={"Send up to 2 GB"} classNameCard={"bg-[--theme-color] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"} />
        <Card cardImage={Double} cardText={"Partnership"} cardValue={"$199,90"} cardStorage={"1 TB Storage"} cardWarranty={"3 User Allowed"} cardUpgrade={"Send up to 10 GB"} classNameCard={"text-[--theme-color] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"} />
        <Card cardImage={Triple} cardText={"Group Account"} cardValue={"$299,90"} cardStorage={"5 TB Storage"} cardWarranty={"10 Users Allowed"} cardUpgrade={"Send up to 20 GB"} classNameCard={"bg-[--theme-color] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"} />
      </div>
    </div>
  )
}

export default Cards