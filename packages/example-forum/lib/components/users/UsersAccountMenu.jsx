import { registerComponent } from 'meteor/vulcan:core'
import React, { Component } from 'react'
import { withApollo } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base'

class UsersAccountMenu extends Component {
  login = () => {
    Meteor.loginWithGithub(null, error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        if (error instanceof Accounts.LoginCancelledError) {
          // do nothing
        } else {
          const errorId = `accounts.error_${error.reason
            .toLowerCase()
            .replace(/ /g, '_')}`
  
          alert(errorId)
        }
        return
      }
  
      this.props.client.resetStore()
    })
  
  }

  render() {
    return (
      <>
        <button onClick={this.login}>Sign in</button>
        <button onClick={this.login}>Sign up</button>
      </>
    )
  }

}

registerComponent({ name: 'UsersAccountMenu', component: withApollo(UsersAccountMenu) })
