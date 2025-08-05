import React from 'react'

interface EmailIconProps {
  size?: number | string
  className?: string
}

const EmailIcon: React.FC<EmailIconProps> = ({ 
  size = 19, 
  className = "" 
}) => {
  return (
    <svg 
      width={size} 
      height={typeof size === 'number' ? (size * 22 / 19) : '22'} 
      viewBox="0 0 19 22" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M2.74219 4.66057H15.2578C15.4525 4.66057 15.6171 4.72781 15.7515 4.86228C15.8859 4.99676 15.9531 5.16137 15.9531 5.35613V16.4851C15.9531 16.6799 15.8859 16.8445 15.7515 16.979C15.6171 17.1134 15.4525 17.1807 15.2578 17.1807H2.74219C2.5475 17.1807 2.38294 17.1134 2.24852 16.979C2.11409 16.8445 2.04688 16.6799 2.04688 16.4851V5.35613C2.04688 5.16137 2.11409 4.99676 2.24852 4.86228C2.38294 4.72781 2.5475 4.66057 2.74219 4.66057ZM14.5625 7.60975L9.05562 12.5482L3.4375 7.59583V15.7895H14.5625V7.60975ZM3.79906 6.05169L9.04172 10.6841L14.2148 6.05169H3.79906Z" fill="white"/>
    </svg>
  )
}

export default EmailIcon