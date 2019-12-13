import React from 'react'
import { withRouter } from 'react-router-dom'
import { signIn } from '../firebase'
import UserContext from '../UserContext'

class Login extends React.Component {
  static contextType = UserContext
  state = {
    loading: false,
  }

  handleClick = async e => {
    this.setState({loading: true})
    const { user } = await signIn('admin@pitakill.net', 'holamundo')
    this.setState({loading: false})
    this.context.setUser(user.toJSON())
    this.props.history.push('/users')
  }

  render() {
    return (
      <>
        <h1>Login view</h1>
        <button onClick={this.handleClick}>Log in</button>
      </>
    )
  }
}

export default withRouter(Login)
