import  React from 'react';


function  FAQ () {
//Se declara la variable del estado*/
  const [state, setState] = React.useState ([0]);

  return (
    <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
      <div className="row">
        <div className="col-xl-3">
            {/*begin::Portlet*/}
          <div className="kt-portlet">
              <div className="kt-portlet__body">
                  {/*begin::Section*/}
                  <div className="kt-section">
                      <div className="kt-section__content">
                          <ul className="kt-nav kt-nav--v2 kt-nav--md-space kt-nav--bold kt-nav--lg-font">
                              <li className="kt-nav__item">
                                  <a href="#" className="kt-nav__link">
                                      <span className="kt-nav__link-text ">About Our Product</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="#" className="kt-nav__link">
                                      <span className="kt-nav__link-text">License Related</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item kt-nav__item--active">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Support Policy</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Single Application</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Multi Application</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Terms of Use</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Author Fees</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Product Approval</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Support Forum</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Our Advisors</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">NDA Terms</span>
                                  </a>
                              </li>
                              <li className="kt-nav__item">
                                  <a href="" className="kt-nav__link">
                                      <span className="kt-nav__link-text">Privacy Policy</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  {/*//end::Section*/}
              </div>
          </div>
          {/*end::Portlet*/}
        </div>
    </div>
  </div>
  )
}

export default FAQ
