import React from 'react'

interface ProjectsIconProps {
  size?: number | string
  className?: string
}

const ProjectsIcon: React.FC<ProjectsIconProps> = ({ 
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
      <mask id="mask0_1983_695" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1983_695)">
        <path d="M4.82067 18.6667V13.3333H1.33333V26.6667H22.6667V13.3333H9.33333V12H24V28H0V12H4.82067V4H13.4873V8.82067H6.154V18.6667H4.82067Z" fill="#E64C27"/>
      </g>
    </svg>
  )
}

export default ProjectsIcon