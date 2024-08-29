import Image, { StaticImageData } from 'next/image';

interface TeamCardProps {
  memberPhoto: StaticImageData;
  memberName: string;
  memberSpecialist: string;
}

export default function TeamCard({ memberPhoto, memberName, memberSpecialist }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-lg">
      <div className="relative w-32 h-32 md:w-48 md:h-48">
        <Image
          src={memberPhoto}
          alt={`${memberName}'s photo`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg shadow-gray-400"
        />
      </div>
      <div className="pt-2 pb-4 px-2 flex flex-col">
        <p className="font-bold text-sm lg:text-xl text-cont-primary mb-1">{memberName}</p>
        <p className="font-bold text-cont-secondary text-xs lg:text-xs uppercase">{memberSpecialist}</p>
      </div>
    </div>
  );
}
