import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        
        <ul>
          <h5>Users Below!</h5>
          {users}
        
        </ul>
        {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }


}
// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users)
