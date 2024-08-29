interface PointProps {
  misi: string,
}

export default function MisiPoint({misi}: PointProps) {
  return (
    <div className="relative flex">
      <div className="absolute w-2 h-2 top-2 bg-cont-secondary rounded-full"></div>
      <p className="ml-6 font-semibold text-black text-xl">{misi}</p>
    </div>
  )
}