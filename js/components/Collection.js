import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';

class Collection extends Component {

  componentWillMount() {
    this.props.subscribe(this.props.params.id);
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
        Oh hai
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
  subscribe: collectionActions.subscribeToCollection
}

export default connect(mapStateToProps, attachActions)(Collection)
