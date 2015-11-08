import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';
import moment from 'moment';
import ReactGridLayout from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import EntryPreview from './EntryPreview';

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
      <div>
        <div className='title'>{ c.title }</div>
        <div className='date'>{ moment(c.date).fromNow() }</div>
        <ReactGridLayout
          className='layout'
          isResizable={ true }
          cols={3}
          rowHeight={90}
          onLayoutChange={ this.handleLayoutChange.bind(this) }
        >
          { c.layout.map((l, i) => {
            return (
              <div key={i} _grid={l}>
                <EntryPreview entry={ c.entries[l.i] } />
              </div>
            )
          }) }
        </ReactGridLayout>
      </div>
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
