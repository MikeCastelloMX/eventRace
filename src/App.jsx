import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Table from './components/Table'
import Users from './components/Users'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Container from './components/Container'
import FAQ from './components/FAQ'
import Context from './Context'

function App() {
  const [open, toggleOpen] = React.useState(true)

  const defaultClasses = "kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--static kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed"

  return (
    <div className={open ? defaultClasses : `${defaultClasses} kt-aside--minimize`}>
      <div className="kt-grid kt-grid--hor kt-grid--root">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
          <Context.Provider value={{value: open, toggle: toggleOpen}}>
            <Sidebar />
            <Main>
              <Switch>
                <Route path='/table'>
                  <Container>
                    <div className="alert alert-light alert-elevate" role="alert">
                      <div className="alert-icon">
                        <i className="flaticon-warning kt-font-brand"/>
                      </div>
                      <div className="alert-text">
                        Each column has an optional rendering control called columns.render which can be used to process the content of each cell before the data is used.
                        See official documentation <a className="kt-link kt-font-bold" href="https://datatables.net/examples/advanced_init/column_render.html" target="_blank" rel="noopener noreferrer">here</a>.
                      </div>
                    </div>
                    <div className="kt-portlet kt-portlet--mobile">
                      <div className="kt-portlet__head">
                        <div className="kt-portlet__head-label">
                          <h3 className="kt-portlet__head-title">
                            Column Rendering
                          </h3>
                        </div>
                      </div>
                      <div className="kt-portlet__body">
                        <Table />
                      </div>
                    </div>
                  </Container>
                </Route>
                <Route path='/users'>
                  <Container>
                    <Users />
                  </Container>
                </Route>
                <Route path='/faq'>
                  <Container>
                    <FAQ />
                  </Container>
                </Route>
                <Redirect from='/' to='/table' />
              </Switch>
            </Main>
          </Context.Provider>
        </div>
      </div>
    </div>
  )
}

export default App
