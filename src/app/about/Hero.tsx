import contsolMembers from '.../assets/contsol-members.jpeg';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className='h-20'></div>
      <div className="
        relative p-4 lg:px-16 lg:py-8 h-56 lg:h-96 overflow-hidden flex flex-col justify-center mb-12
        bg-[url('../assets/contsol-members.jpeg')] bg-cover bg-center
        text-white
        ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative font-extrabold text-4xl lg:text-5xl mb-5">About Us</h1>
        <h2 className='relative text-base lg:text-lg'>Hello, we are Cont Solution Development,</h2> 
        <h2 className='relative text-base lg:text-lg'>your digital problem-solving solution.</h2>
      </div>
    </>
  )
} 