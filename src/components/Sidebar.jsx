import React from 'react'
import logo from '../media/logos/logo-1.png'

function Sidebar(props) {
  const defaultClassesButton = "kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left"
  const defaultClassesSubmenu = "kt-menu__item kt-menu__item--submenu"

  const [submenu, toggleSubmenu] = React.useState(false)
  const [submenuInner, toggleSubmenuInner] = React.useState(false)

  const handleClick = (e, fn, p) => {
    e.preventDefault()
    fn(!p)
  }

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
                <a
                  target="_blank"
                  href="https://keenthemes.com/keen/preview/demo2/builder.html" className="kt-menu__link "
                  rel="noopener noreferrer"
                  >
                  <i className="kt-menu__link-icon flaticon-cogwheel-1" />
                  <span className="kt-menu__link-text">Builder</span>
                </a>
              </li>
              <li className="kt-menu__section ">
                <h4 className="kt-menu__section-text">Custom</h4>
                <i className="kt-menu__section-icon flaticon-more-v2"></i>
              </li>
              <li
                className={submenu ? `${defaultClassesSubmenu} kt-menu__item--open` : defaultClassesSubmenu}
                aria-haspopup="true"
                data-ktmenu-submenu-toggle="hover"
                >
                <a href="/" className="kt-menu__link kt-menu__toggle" onClick={e => handleClick(e, toggleSubmenu, submenu)}>
                  <i className="kt-menu__link-icon flaticon-web" />
                  <span className="kt-menu__link-text">
                    Apps
                  </span>
                  <i className="kt-menu__ver-arrow la la-angle-right" />
                </a>
                <div className="kt-menu__submenu ">
                  <span className="kt-menu__arrow" />
                  <ul className="kt-menu__subnav">
                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                      <span className="kt-menu__link">
                        <span className="kt-menu__link-text">Apps</span>
                      </span>
                    </li>
                    <li
                      className={submenuInner ? `${defaultClassesSubmenu} kt-menu__item--open` : defaultClassesSubmenu}
                      aria-haspopup="true" data-ktmenu-submenu-toggle="hover"
                      >
                      <a href="/" className="kt-menu__link kt-menu__toggle" onClick={e => handleClick(e, toggleSubmenuInner, submenuInner)}>
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">Users</span>
                        <i className="kt-menu__ver-arrow la la-angle-right"/>
                      </a>
                      <div className="kt-menu__submenu ">
                        <span className="kt-menu__arrow" />
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
                            <span className="kt-menu__link">
                              <span className="kt-menu__link-text">Users</span>
                            </span>
                          </li>
                          <li className="kt-menu__item" aria-haspopup="true">
                            <a href="demo2/custom/users/list-columns-1.html" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">List - Columns 1</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a href="demo2/custom/users/list-columns-2.html" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span/>
                              </i>
                              <span className="kt-menu__link-text">List - Columns 2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={submenu ? `${defaultClassesSubmenu} kt-menu__item--open` : defaultClassesSubmenu}
                aria-haspopup="true"
                data-ktmenu-submenu-toggle="hover"
                >
                <a href="/" className="kt-menu__link kt-menu__toggle" onClick={e => handleClick(e, toggleSubmenu, submenu)}>
                  <i className="kt-menu__link-icon flaticon-web" />
                  <span className="kt-menu__link-text">
                    Apps
                  </span>
                  <i className="kt-menu__ver-arrow la la-angle-right" />
                </a>
                <div className="kt-menu__submenu ">
                  <span className="kt-menu__arrow" />
                  <ul className="kt-menu__subnav">
                    <li className="kt-menu__item  kt-menu__item--parent" aria-haspopup="true">
                      <span className="kt-menu__link">
                        <span className="kt-menu__link-text">Apps</span>
                      </span>
                    </li>
                    <li
                      className={submenuInner ? `${defaultClassesSubmenu} kt-menu__item--open` : defaultClassesSubmenu}
                      aria-haspopup="true" data-ktmenu-submenu-toggle="hover"
                      >
                      <a href="/" className="kt-menu__link kt-menu__toggle" onClick={e => handleClick(e, toggleSubmenuInner, submenuInner)}>
                        <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                          <span />
                        </i>
                        <span className="kt-menu__link-text">Users</span>
                        <i className="kt-menu__ver-arrow la la-angle-right"/>
                      </a>
                      <div className="kt-menu__submenu ">
                        <span className="kt-menu__arrow" />
                        <ul className="kt-menu__subnav">
                          <li className="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
                            <span className="kt-menu__link">
                              <span className="kt-menu__link-text">Users</span>
                            </span>
                          </li>
                          <li className="kt-menu__item" aria-haspopup="true">
                            <a href="demo2/custom/users/list-columns-1.html" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span />
                              </i>
                              <span className="kt-menu__link-text">List - Columns 1</span>
                            </a>
                          </li>
                          <li className="kt-menu__item " aria-haspopup="true">
                            <a href="demo2/custom/users/list-columns-2.html" className="kt-menu__link ">
                              <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                                <span/>
                              </i>
                              <span className="kt-menu__link-text">List - Columns 2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
