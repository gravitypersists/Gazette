import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';
import Modal from 'boron/OutlineModal';

import CollectionBrowser from './CollectionBrowser';
import CollectionCreator from './CollectionCreator';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingAdd: false
    }
  }

  componentWillMount() {
    this.props.subscribe();
  }

  handleNewCollection(collection) {
    this.props.create(collection);
  }

  handleAddClick() {
    this.setState({ showingAdd: true });
  }

  render() {
    return (
      <main>
        <span className='text'>hello</span>
        <CollectionBrowser collections={ this.props.collections }/>
        <button onClick={ this.handleAddClick.bind(this) }>Add a Newspaper</button>
        { this.state.showingAdd && <CollectionCreator onCreate={ this.handleNewCollection.bind(this) } /> }
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
