import React from 'react'

function Card(props) {
    return (
        <div className="col-xl-4 col-lg-6">
            <div className="kt-portlet kt-portlet--height-fluid">
                <div className="kt-portlet__body">
                    <div className="kt-widget kt-widget--general-1">
                        <div className="kt-media kt-media--lg kt-media--circle">
                            <img src={props.data.image} alt={props.data.name} />
                        </div>
                        <div className="kt-widget__wrapper">
                            <div className="kt-widget__label">
                                <a href="http://google.com" className="kt-widget__title">
                                   { props.data.name } 
                                </a>
                                <span className="kt-widget__desc">
                                   { props.data.job_title } 
                                </span>
                            </div>
                            <div className="kt-widget__toolbar">
                                <a href="http://google.com" className="btn btn-default btn-sm btn-bold btn-upper">chat</a>
                                <a href="demo2/custom/profile/overview-1.html" target="_blank" className="btn btn-default btn-sm btn-bold btn-upper">profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card