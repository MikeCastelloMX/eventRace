import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

function Submenu(props) {
    const defaultClassesSubmenu = "kt-menu__item kt-menu__item--submenu"

    const [submenu, toggleSubmenu] = React.useState(false)
    const [submenuInner, toggleSubmenuInner] = React.useState(false)
  
    const handleClick = (e, fn, p) => {
      e.preventDefault()
      fn(!p)
    }

    return (
      <Accordion
        as="li"
        className={submenu ? `${defaultClassesSubmenu} kt-menu__item--open` : defaultClassesSubmenu}
        >
        <Accordion.Toggle
          as="a" className="kt-menu__link kt-menu__toggle"
          onClick={e => handleClick(e, toggleSubmenu, submenu)}
          eventKey="0"
          >
            <i className="kt-menu__link-icon flaticon-web" />
            <span className="kt-menu__link-text">
              { props.title }
            </span>
            <i className="kt-menu__ver-arrow la la-angle-right" />
        </Accordion.Toggle>
        <Accordion.Collapse
          className="kt-menu__submenu"
          eventKey="0"
        >
          <>
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
          </>
        </Accordion.Collapse>
      </Accordion>
    )
}

export default Submenu