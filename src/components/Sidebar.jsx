import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../media/logos/logo-1.png'
import Submenu from './Submenu'

function Sidebar(props) {
  const defaultClassesButton = "kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left"

  return (
    <>
      <button className="kt-aside-close " id="kt_aside_close_btn">
        <i className="la la-close" />
      </button>
      <div className="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">
        <div className="kt-aside__brand   kt-grid__item" id="kt_aside_brand">
          <div className="kt-aside__brand-logo">
            <a href="demo2/index.html">
              <img alt="Logo" src={logo}/>
            </a>
          </div>
          <div className="kt-aside__brand-tools">
            <button
              className={props.open ? defaultClassesButton : `${defaultClassesButton} kt-aside__brand-aside-toggler--active`}
              id="kt_aside_toggler"
              onClick={() => props.toggleOpen(!props.open)}
              >
              <span />
            </button>
          </div>
        </div>
        <div className="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
        <div
          id="kt_aside_menu"
          className="kt-aside-menu"
          data-ktmenu-vertical="1"
          data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500"
          >
            <ul className="kt-menu__nav ">
              <li className="kt-menu__section kt-menu__section--first">
                <h4 className="kt-menu__section-text">Layout</h4>
                <i className="kt-menu__section-icon flaticon-more-v2" />
              </li>
              <li className="kt-menu__item " aria-haspopup="true" >
                <Link
                  to="/users"
                  className="kt-menu__link "
                  >
                  <i className="kt-menu__link-icon flaticon-cogwheel-1" />
                  <span className="kt-menu__link-text">Users</span>
                </Link>
              </li>
              <li className="kt-menu__item " aria-haspopup="true" >
                <Link
                  to="/table"
                  className="kt-menu__link "
                  >
                  <i className="kt-menu__link-icon flaticon-cogwheel-1" />
                  <span className="kt-menu__link-text">Table</span>
                </Link>
              </li>
              <li className="kt-menu__section ">
                <h4 className="kt-menu__section-text">Custom</h4>
                <i className="kt-menu__section-icon flaticon-more-v2"></i>
              </li>
              <Submenu title="Apps 1"/>
              <Submenu title="Apps 2"/>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
