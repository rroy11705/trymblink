import React from 'react'

interface EfficiencyIconProps {
  size?: number | string
  className?: string
}

const EfficiencyIcon: React.FC<EfficiencyIconProps> = ({ 
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
      <mask id="mask0_1983_705" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1983_705)">
        <path d="M4.89733 28.0259L10.282 18.6669L0 17.4619L15 3.97461H16.4873L10.9743 13.3593L21.3333 14.5386L6.33333 28.0259H4.89733ZM8.682 24.0233L18.254 15.5309L8.82567 14.4746L12.695 7.93361L3.07933 16.4516L12.4743 17.5773L8.682 24.0233Z" fill="#E64C27"/>
      </g>
    </svg>
  )
}

export default EfficiencyIcon