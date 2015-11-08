import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';
import moment from 'moment';
import ReactGridLayout from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import EntryPreview from './EntryPreview';
import CollectionConfig from './CollectionConfig';
import Prompt from './Prompt';

class Collection extends Component {

  componentWillMount() {
    this.props.subscribe();
  }

  handleLayoutChange(l) {
    this.props.setCollectionLayout(this.props.params.id, l);
  }

  handleConfigChange(c) {
    this.props.setCollectionProps(this.props.params.id, c);
  }

  renderConfig(c) {
    return (
      <div className='config-container'>
        <CollectionConfig config={ c } onChange={ this.handleConfigChange.bind(this) }/>
      </div>
    )
  }

  renderPrompt(config) {
    return (
      <div className='config-container'>
        <Prompt config={ config } />
      </div>
    )
  }

  render() {
    let isTeacher = localStorage.getItem('teacher');
    const c = this.props.collections[this.props.params.id];
    if (!c) return <div className='spinner'></div>;
    return (
      <div className={ isTeacher ? 'for-teacher' : '' }>
        { isTeacher ? this.renderConfig(c) : this.renderPrompt(c) }
        <ReactGridLayout
          className='layout'
          isResizable={ isTeacher ? true : false }
          isDraggable={ isTeacher ? true : false }
          cols={3}
          rowHeight={120}
          onLayoutChange={ this.handleLayoutChange.bind(this) }
        >
          { c.layout.map((l, i) => {
            return (
              <div key={i} _grid={l} >
                <div className={'entry-prev-container ' + ((c.entries[l.i].published) ? 'is-published' : '')}>
                  <EntryPreview entry={ c.entries[l.i] } id={l.i} colid={ this.props.params.id } />
                </div>
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
  setCollectionLayout: collectionActions.setCollectionLayout,
  setCollectionProps: collectionActions.setCollectionProps
}

export default connect(mapStateToProps, attachActions)(Collection)
