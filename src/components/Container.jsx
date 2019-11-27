import React from 'react'

function Container(props) {
  return (
    <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
      {props.children}
    </div>
  )
}

export default Container
