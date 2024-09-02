interface Pointprops {
  num: string,
  title: string,
  subtitle: string,
  end?: boolean
}
export default function HowPoint({num, title, subtitle, end=false}: Pointprops) {
  return (
    <div className="flex  gap-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 p-2 rounded-full text-sm border-4 font-semibold border-cont-secondary flex items-center justify-center">
          {num}
        </div>
        {!end &&
          <div className="border-2 border-cont-secondary h-full"></div>
        } 
      </div>
      <div className="flex flex-col mb-4">
        <h3 className="font-bold text-cont-primary">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}