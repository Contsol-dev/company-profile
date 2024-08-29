interface HowButtonProps {
  active: boolean,
  text: string,
  onClick: () => void,
}

export default function HowButtons({active, text, onClick}: HowButtonProps) {
  return (
    <button
        className={`px-4 py-2 flex items-center lg:items-start
                  font-bold text-xs lg:text-base rounded-full hover:text-white transition-all duration-150
                  ${active ? 'bg-cont-primary text-white' : ' bg-gray-200 text-cont-primary hover:bg-cont-secondary'}
        `}
        onClick={onClick}
    >
      {text}
    </button>
  );
}