import React from 'react'

export function ClientLayout (props) {
  const { children } = props
  return (
    <div>
      <h2>Cliente Layout</h2>
      {children}
    </div>
  )
}
