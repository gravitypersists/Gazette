import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';
import moment from 'moment';
import ReactGridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

class Collection extends Component {

  componentWillMount() {
    this.props.subscribe();
  }

  handleLayoutChange(l) {
    this.props.setCollectionLayout(this.props.params.id, l);
  }

  render() {
    const c = this.props.collections[this.props.params.id];
    if (!c) return <div className='spinner'></div>;
    return (
      <main>
        <div className='title'>{ c.title }</div>
        <div className='date'>{ moment(c.date).fromNow() }</div>
        <ReactGridLayout
          className='layout'
          isResizable={ true }
          cols={3}
          rowHeight={50}
          onLayoutChange={ this.handleLayoutChange.bind(this) }
        >
          { c.layout.map((l, i) => <div key={i} _grid={l}></div>) }
        </ReactGridLayout>
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
  setCollectionLayout: collectionActions.setCollectionLayout
}

export default connect(mapStateToProps, attachActions)(Collection)
