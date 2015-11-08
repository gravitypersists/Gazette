import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';
import * as userActions from '../actions/users';
import Modal from 'boron/WaveModal';
import _ from 'lodash';

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingAdd: false,
      rands: [1,2,3,4].map(() => ~~(Math.random()*1000))
    }
  }

  componentWillMount() {
    this.props.subscribe();
    this.props.getUser();
  }

  componentDidUpdate() {
    if (this.props.user && !this.props.user.name && !this.props.user.notLoaded) {
      this.refs['create'].show();
    }
  }

  handleRobotPick(avatar) {
    this.props.setUser(Object.assign({}, this.props.user, {avatar}));
    this.refs['create'].hide();
  }

  handleName(e) {
    let name = e.target.value;
    this.props.setUser(Object.assign({}, this.props.user, {name}));
  }

  render() {
    return (
      <div>
        <Modal ref='create' className='modal-content user-create'>
          <div className='inner'>
            <h2>Who are you?</h2>
            <input className='name' onChange={ this.handleName.bind(this) }
              placeholder='Your pen name...' value={ this.props.user.name ? this.props.user.name : ''}/>
            <ul className='robots'>
              {
                (this.state.rands.map(rand => {
                  if (this.props.user.name.length === 0) return;
                  return (
                    <li className={ this.props.user.avatar === rand ? 'selected' : '' } onClick={ () => this.handleRobotPick(rand) }>
                      <img src={`https://robohash.org/${rand}.png`}/>
                    </li>
                  )
                }))
              }
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    collections: state.collections,
    user: state.user
  }
}

const attachActions = {
  subscribe: collectionActions.subscribe,
  getUser: userActions.getUser,
  setUser: userActions.updateUser
}

export default connect(mapStateToProps, attachActions)(Demo)
