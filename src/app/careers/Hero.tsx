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
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <h1 className="relative font-extrabold mx-auto text-4xl lg:text-5xl mb-5">Careers <span className='text-cont-secondary'>Form</span></h1>
        <h2 className='relative text-base mx-auto lg:text-lg'><span className='text-cont-secondary'>Join Us</span>, Learn and Grow Together!</h2>
      </div>
    </>
  )
} 