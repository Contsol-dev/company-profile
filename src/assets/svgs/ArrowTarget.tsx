interface SvgProps {
  className?: string;
  fillColor?: string;
}

export default function ArrowTargetSvg({ className, fillColor = "#12335a" }: SvgProps) {
  return (
    <svg  
      xmlns="http://www.w3.org/2000/svg"  
      width="24"  height="24" viewBox="0 0 24 24"  
      fill="none"  stroke={fillColor}  stroke-width="2"  
      stroke-linecap="round"  stroke-linejoin="round"  
      className={`icon icon-tabler icons-tabler-outline icon-tabler-target-arrow ${className}` }>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 7a5 5 0 1 0 5 5" />
      <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
      <path d="M15 6v3h3l3 -3h-3v-3z" />
      <path d="M15 9l-3 3" />
    </svg>
  );
}
