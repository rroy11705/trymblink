import React from 'react'

interface FacebookIconProps {
  size?: number | string
  className?: string
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M20.9016 2H3.10347C2.81081 2 2.53014 2.11621 2.3232 2.32306C2.11626 2.52992 2 2.81047 2 3.103V20.8953C2 21.1878 2.11626 21.4684 2.3232 21.6752C2.53014 21.8821 2.81081 21.9983 3.10347 21.9983H12.6816V14.2552H10.0774V11.2364H12.6816V9.01001C12.6816 6.42729 14.2604 5.02053 16.5658 5.02053C17.3438 5.01776 18.1213 5.05741 18.895 5.13932V7.83913H17.3009C16.0463 7.83913 15.8036 8.43475 15.8036 9.30867V11.2364H18.7931L18.4044 14.2552H15.8036V22H20.8965C21.189 21.9996 21.4695 21.8832 21.6763 21.6764C21.8831 21.4697 21.9995 21.1894 22 20.897V3.1047C22.0005 2.81275 21.8851 2.53253 21.6792 2.32546C21.4733 2.11838 21.1937 2.00135 20.9016 2Z" fill="white"/>
    </svg>
  )
}

export default FacebookIcon