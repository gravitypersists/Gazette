import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';

export default class Header extends React.Component {

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
          <nav>
            <Link to='/'>Assignments</Link>
            <Link to='/students'>Students</Link>
          </nav>
        </div>
      </div>
    )
  }

}
