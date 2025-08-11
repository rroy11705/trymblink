import React from 'react'

interface DiagonalArrowIconProps {
  size?: number | string
  className?: string
}

const DiagonalArrowIcon: React.FC<DiagonalArrowIconProps> = ({ 
  size = 18, 
  className = "" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id="mask0_2009_683" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
        <rect width="18" height="18" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_2009_683)">
        <path d="M4.72069 13.2332L3.9375 12.45L11.3179 5.0625H4.60819V3.9375H13.2332V12.5625H12.1082V5.85281L4.72069 13.2332Z" fill="white"/>
      </g>
    </svg>
  )
}

export default DiagonalArrowIcon