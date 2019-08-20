import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconUser({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 14c-4.806 0-8.571 2.227-8.571 5.07v.875a.694.694 0 1 0 1.388 0v-.875c0-1.996 3.29-3.682 7.183-3.682s7.183 1.686 7.183 3.682v.875a.694.694 0 1 0 1.388 0v-.875C20.57 16.227 16.806 14 12 14zm4.187-6.42a4.166 4.166 0 0 0-1.183-2.351 4.192 4.192 0 0 0-3.582-1.183A4.2 4.2 0 0 0 7.889 8.81a4.167 4.167 0 0 0 1.65 2.754 4.164 4.164 0 0 0 3.115.78 4.2 4.2 0 0 0 3.534-4.764zm-3.737 3.39a2.788 2.788 0 0 1-2.084-.522A2.788 2.788 0 0 1 9.26 8.607a2.81 2.81 0 0 1 3.189-3.189 2.79 2.79 0 0 1 2.365 2.365 2.81 2.81 0 0 1-2.365 3.188z"
      />
    </svg>
  )
}

IconUser.propTypes = IconPropTypes
export default IconUser
