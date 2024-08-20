import Image, { StaticImageData } from 'next/image';

interface TeamCardProps {
  memberPhoto: StaticImageData;
  memberName: string;
  memberSpecialist: string;
}

export default function TeamCard({ memberPhoto, memberName, memberSpecialist }: TeamCardProps) {
  return (
    <div className="
      flex flex-col items-center text-center bg-cont-primary shadow-lg
    ">
      <div className='overflow-hidden w-full flex items-center h-40 lg:h-96'>
        <Image 
          src={memberPhoto} 
          alt={memberName} 
          width={150} 
          height={150} 
          className="w-full" 
        />
      </div>
      <div className='py-4 px-2 flex flex-col mb-2 lg:mb-4'>
        <p className="font-bold text-sm lg:text-xl text-white">{memberName}</p>
        <p className="text-cont-secondary text-xs lg:text-sm">{memberSpecialist}</p>
      </div>
    </div>
  );
}
