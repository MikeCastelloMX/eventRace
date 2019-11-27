import React from 'react'

function Main(props) {
  return (
    <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
      <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper">
        <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
          { props.children }
        </div>
      </div>
    </div>
  )
}

export default Main
