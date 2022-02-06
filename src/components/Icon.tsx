import React from 'react'
import { styled } from '@lib/stitches'

interface IconProps {
  icon: JSX.Element
  className?: string
  onClick?: () => void
}

function _Icon({ icon, className, onClick }: IconProps) {
  return (
    <i className={className} onClick={onClick}>
      {icon}
    </i>
  )
}

export const Icon = styled(_Icon)
