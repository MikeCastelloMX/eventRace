import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import UserContext from '../UserContext'
import Sidebar from './Sidebar'
import Main from './Main'
import Container from './Container'

function PrivateRoute(props) {
  const { user } = React.useContext(UserContext)
  const { children, ...rest } = props

  const loggedIn = !(Object.keys(user).length === 0 && user.constructor === Object)

  return (
    <Route
      { ...rest }
      render={ () =>
        loggedIn
          ? <>
              <Sidebar />
              <Main>
                <Container>
                  { children }
                </Container>
              </Main>
            </>
          : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
