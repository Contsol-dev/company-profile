interface HowButtonProps {
  active: boolean,
  text: string,
  onClick: () => void,
}

export default function HowButtons({active, text, onClick}: HowButtonProps) {
  return (
    <button
        className={`px-4 py-2 flex items-center lg:items-start
                  font-bold text-xs lg:text-base rounded-full hover:bg-cont-primary hover:text-white
                  ${active ? 'bg-cont-primary text-white' : ' bg-gray-200 text-cont-primary'}
        `}
        onClick={onClick}
    >
      {text}
    </button>
  );
}