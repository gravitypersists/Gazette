import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';
import styles from '../../css/app.scss';

import CollectionBrowser from './CollectionBrowser';

class Home extends Component {

  componentWillMount() {
    this.props.subscribe();
  }

  onClick() {
    this.props.create({
      name: 'Simple Project',
      date: Date.now()
    });
  }

  render() {
    return (
      <main>
        <span className='text'>hello</span>
        <CollectionBrowser collections={ this.props.collections }/>
        <button onClick={ this.onClick.bind(this) }>Add a Newspaper</button>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    collections: state.collections
  }
}

const attachActions = {
  subscribe: collectionActions.subscribe,
  create: collectionActions.create
}

export default connect(mapStateToProps, attachActions)(Home)
