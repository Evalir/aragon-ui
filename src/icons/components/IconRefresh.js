import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconRefresh({ size, ...props }) {
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
        stroke="currentColor"
        strokeWidth={0.2}
        d="M8.99 10.216H5.96v-3.03a.582.582 0 0 0-1.164 0v3.612c0 .321.26.582.582.582H8.99a.582.582 0 0 0 0-1.164zm9.632 2.407H15.01a.582.582 0 0 0 0 1.165h3.03v3.03a.582.582 0 1 0 1.164 0v-3.613a.582.582 0 0 0-.582-.582z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
        d="M17.66 10.001a5.96 5.96 0 0 0-3.072-3.413 5.96 5.96 0 0 0-4.586-.241 6.037 6.037 0 0 0-2.235 1.408L4.98 10.373a.582.582 0 0 0 .797.849L8.57 8.597a4.866 4.866 0 0 1 1.82-1.153 4.841 4.841 0 0 1 6.172 2.946.582.582 0 0 0 1.098-.39zm1.386 2.806a.582.582 0 0 0-.823-.026l-2.793 2.625a4.804 4.804 0 0 1-3.432 1.43h-.001a4.804 4.804 0 0 1-3.419-1.416 4.866 4.866 0 0 1-1.14-1.807.582.582 0 0 0-1.097.389 6.037 6.037 0 0 0 1.414 2.242A5.96 5.96 0 0 0 11.997 18h.001a5.96 5.96 0 0 0 4.236-1.752l2.786-2.618a.582.582 0 0 0 .026-.823z"
      />
    </svg>
  )
}

IconRefresh.propTypes = IconPropTypes
export default IconRefresh
