import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Auth, PropsRoute } from './utils/routing'
import { graphql, compose } from 'react-apollo'
import { AUTOLOGIN } from './apollo/mutations/autoLogin'
import Button from '@material-ui/core/Button'
import UserLanding from './containers/UserLanding'

const Home = () => (
  <div>
    <Button variant="contained" href="/api/google">
      Login with Google
    </Button>
  </div>
)

class App extends Component {
  state = {
    loggedIn: false,
    user: null
  }

  componentWillMount() {
    this.handleAutoLogin()
  }

  handleGoogleLogin = user => {
    Auth.authenticate()
    this.setState({ loggedIn: true, user })
  }

  handleAutoLogin = async () => {
    const token = localStorage.getItem('TOKEN')
    if (!token) return
    let response = await this.props.autoLogin()
    const { success, message, user } = response.data.autoLogin
    if (success) Auth.authenticate()
    this.setState({ user, loggedIn: success })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PropsRoute
            path="/user/:userId"
            component={UserLanding}
            handleGoogleLogin={this.handleGoogleLogin}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default compose(graphql(AUTOLOGIN, { name: 'autoLogin' }))(App)
