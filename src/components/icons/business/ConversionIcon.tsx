import React from 'react'

interface ConversionIconProps {
  size?: number | string
  className?: string
}

const ConversionIcon: React.FC<ConversionIconProps> = ({ 
  size = 32, 
  className = "" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id="mask0_1983_700" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1983_700)">
        <path d="M5.74367 25.308L0 19.5643L5.74367 13.821L6.68733 14.772L2.56167 18.8977H12.4103V20.231H2.56167L6.68733 24.3567L5.74367 25.308ZM18.2563 18.1543L17.3127 17.203L21.4383 13.0773H11.5897V11.744H21.4383L17.3127 7.61832L18.2563 6.66699L24 12.4107L18.2563 18.1543Z" fill="#E64C27"/>
      </g>
    </svg>
  )
}

export default ConversionIcon