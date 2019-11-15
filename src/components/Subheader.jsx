import React from 'react'

function Subheader(props) {
    return (
        <div className="kt-subheader   kt-grid__item" id="kt_subheader">
        <div className="kt-container  kt-container--fluid ">
        <div className="kt-subheader__main">
                            <h3 className="kt-subheader__title">Column Rendering Examples</h3>
            
                            <span className="kt-subheader__separator kt-hidden"></span>
                <div className="kt-subheader__breadcrumbs">
                    <a href="http://google.com" className="kt-subheader__breadcrumbs-home"><i className="flaticon2-shelter"></i></a>
                                            <span className="kt-subheader__breadcrumbs-separator"></span>
                        <a href="http://google.com" className="kt-subheader__breadcrumbs-link">
                            DataTables                        </a>
                                            <span className="kt-subheader__breadcrumbs-separator"></span>
                        <a href="http://google.com" className="kt-subheader__breadcrumbs-link">
                            Advanced                        </a>
                                            <span className="kt-subheader__breadcrumbs-separator"></span>
                        <a href="http://google.com" className="kt-subheader__breadcrumbs-link">
                            Column Rendering                        </a>
                </div>
                    
        </div>
        <div className="kt-subheader__toolbar">
            <div className="kt-subheader__wrapper">
                <a href="http://google.com" className="btn btn-icon btn btn-label btn-label-brand btn-bold" data-toggle="kt-tooltip" title="Reports" data-placement="top"><i className="flaticon2-writing"></i></a>
                <a href="http://google.com" className="btn btn-icon btn btn-label btn-label-brand btn-bold" data-toggle="kt-tooltip" title="Calendar" data-placement="top"><i className="flaticon2-hourglass-1"></i></a>
                <div className="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions" data-placement="top">
                    <a href="http://google.com" className="btn btn-icon btn btn-label btn-label-brand btn-bold" data-toggle="dropdown" data-offset="0px,0px" aria-haspopup="true" aria-expanded="false">
                        <i className="flaticon2-add-1"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                        <ul className="kt-nav kt-nav--active-bg" role="tablist">
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link">
                                    <i className="kt-nav__link-icon flaticon2-psd"></i>
                                    <span className="kt-nav__link-text">Document</span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link" role="tab"  >
                                    <i className="kt-nav__link-icon flaticon2-supermarket"></i>
                                    <span className="kt-nav__link-text">Message</span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link">
                                    <i className="kt-nav__link-icon flaticon2-shopping-cart"></i>
                                    <span className="kt-nav__link-text">Product</span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link" role="tab"  >
                                    <i className="kt-nav__link-icon flaticon2-chart2"></i>
                                    <span className="kt-nav__link-text">Report</span>
                                    <span className="kt-nav__link-badge">
                                        <span className="kt-badge kt-badge--danger kt-badge--inline kt-badge--rounded">pdf</span>
                                    </span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link">
                                    <i className="kt-nav__link-icon flaticon2-sms"></i>
                                    <span className="kt-nav__link-text">Post</span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link">
                                    <i className="kt-nav__link-icon flaticon2-avatar"></i>
                                    <span className="kt-nav__link-text">Customer</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                  
                <div className="dropdown dropdown-inline" data-toggle="kt-tooltip" title="Quick actions" data-placement="top">
                    <a href="http://google.com" className="btn btn btn-label btn-label-brand btn-bold" data-toggle="dropdown" data-offset="0 0" aria-haspopup="true" aria-expanded="false">
                        Reports
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <ul className="kt-nav kt-nav--active-bg" id="kt_nav_1" role="tablist">
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link">
                                    <i className="kt-nav__link-icon flaticon2-psd"></i>
                                    <span className="kt-nav__link-text">Products</span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link" role="tab" id="kt_nav_link_1" >
                                    <i className="kt-nav__link-icon flaticon2-supermarket"></i>
                                    <span className="kt-nav__link-text">Customers</span>
                                    <span className="kt-nav__link-badge">
                                        <span className="kt-badge kt-badge--success kt-badge--inline kt-badge--rounded">6</span>
                                    </span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link">
                                    <i className="kt-nav__link-icon flaticon2-shopping-cart"></i>
                                    <span className="kt-nav__link-text">Orders</span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link">
                                    <i className="kt-nav__link-icon flaticon2-shopping-cart"></i>
                                    <span className="kt-nav__link-text">Reports</span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link" role="tab" id="kt_nav_link_2" >
                                    <i className="kt-nav__link-icon flaticon2-chart2"></i>
                                    <span className="kt-nav__link-text">Console</span>
                                    <span className="kt-nav__link-badge">
                                        <span className="kt-badge kt-badge--danger kt-badge--inline kt-badge--rounded">new</span>
                                    </span>
                                </a>
                            </li>
                            <li className="kt-nav__item">
                                <a href="http://google.com" className="kt-nav__link">
                                    <i className="kt-nav__link-icon flaticon2-sms"></i>
                                    <span className="kt-nav__link-text">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Subheader
