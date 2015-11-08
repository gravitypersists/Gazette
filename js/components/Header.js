import { connect } from 'react-redux';
import * as userActions from '../actions/users';
import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='header'>
        <div className='container'>
          <div className='logo'>
            <img src={ logo }/>
          </div>
          { this.props.user.avatar &&
              <img className='avatar' src={`https://robohash.org/${this.props.user.avatar}.png`} />
          }
          <nav>
            <Link to='/'>Assignments</Link>
            <Link to='/students'>Students</Link>
          </nav>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const attachActions = {
}

export default connect(mapStateToProps, attachActions)(Header)
