import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Context from './Context'
import UserContext from './UserContext'
import PrivateRoute from './components/PrivateRoute'
import Loader from './components/Loader'

const Login = React.lazy(() => import('./components/Login'))
const FAQ = React.lazy(() => import('./components/FAQ'))
const Table = React.lazy(() => import('./components/Table'))
const Users = React.lazy(() => import('./components/Users'))

function App() {
  const [open, toggleOpen] = React.useState(true)
  const [user, setUser] = React.useState({})

  const defaultClasses = "kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--static kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed"

  return (
    <React.Suspense fallback={<Loader />}>
    <div className={open ? defaultClasses : `${defaultClasses} kt-aside--minimize`}>
      <div className="kt-grid kt-grid--hor kt-grid--root">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
          <UserContext.Provider value={{user, setUser}}>
            <Context.Provider value={{value: open, toggle: toggleOpen}}>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
                <PrivateRoute path='/table'>
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
                </PrivateRoute>
                <PrivateRoute path='/users'>
                  <Users />
                </PrivateRoute>
                <PrivateRoute path='/faq'>
                  <FAQ />
                </PrivateRoute>
                <Redirect from='/' to='/table' />
              </Switch>
            </Context.Provider>
          </UserContext.Provider>
        </div>
      </div>
    </div>
    </React.Suspense>
  )
}

export default App
