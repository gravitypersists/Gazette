import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';
import Quill from 'react-quill';
import '../../node_modules/react-quill/node_modules/quill/dist/quill.base.css';
import '../../node_modules/react-quill/node_modules/quill/dist/quill.snow.css';
import Modal from 'boron/WaveModal';

import Prompt from './Prompt';

class Entry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.subscribe();
  }

  handleTextChange(content) {
    const collection = this.props.collections[this.props.params.colid];
    const entry = collection.entries[this.props.params.entryid];
    this.props.setEntryForCollection(this.props.params.colid, this.props.params.entryid, Object.assign({}, entry, { content }));
  }

  handleTitleChange(e) {
    let title = e.target.value;
    const collection = this.props.collections[this.props.params.colid];
    const entry = collection.entries[this.props.params.entryid];
    this.props.setEntryForCollection(this.props.params.colid, this.props.params.entryid, Object.assign({}, entry, { title }));
  }

  handlePublishClick() {
    this.refs['modal'].show()
  }

  hideModal() {
    this.refs['modal'].hide()
  }

  handlePublish() {
    const collection = this.props.collections[this.props.params.colid];
    const entry = collection.entries[this.props.params.entryid];
    this.props.setEntryForCollection(this.props.params.colid, this.props.params.entryid, Object.assign({}, entry, { published: true, publishDate: Date.now() }));
  }

  renderPublished(collection, entry) {
    return (
      <div className='entry published'>
        <div className='entry-title'>{ entry.title }</div>
        <div className='entry-content' dangerouslySetInnerHTML={{ __html:entry.content }}></div>
      </div>
    )
  }

  renderEditing(collection, entry) {

    let toolbarItems = _.cloneDeep(Quill.Toolbar.defaultItems);
    toolbarItems[0].items[0].items = [
      { label: "Serif", value: "Georgia" },
      { label: "Sans Serif", value: "Open Sans" },
      { label: "Monospace", value: "monospace" }
    ]
    toolbarItems[0].items[2].items = [
      { label: "Normal", value: "18px" },
      { label: "Smaller", value: "12px" },
      { label: "Larger", value: "26px" }
    ]

    return (
      <div>
        <div className='config-container'>
          <Prompt config={ collection } />
        </div>
        <div className='entry'>
          <input placeholder='Give your post a title' className='entry-title' value={ entry.title } onChange={ this.handleTitleChange.bind(this) }/>
          <button className='publish' onClick={ this.handlePublishClick.bind(this) }>Publish</button>
          <div className='entry-content'>
            <Quill theme='snow' onChange={ this.handleTextChange.bind(this) }>
              <Quill.Toolbar
                key='toolbar'
                ref='toolbar'
                items={ toolbarItems }
              />
              <div
                key='editor'
                ref='editor'
                className='quill-contents'
                dangerouslySetInnerHTML={{ __html:entry.content }}
              />
            </Quill>
          </div>
        </div>
        <Modal ref='modal' className='modal-content confirm-it'>
          <h2>Are you sure want to publish?</h2>
          <div>You will not be able to edit this submission again!</div>
          <div>
            <button className='secondary' onClick={ this.hideModal.bind(this) }>No, wait</button>
            <button onClick={ this.handlePublish.bind(this) }>Do it</button>
          </div>
        </Modal>
      </div>
    )
  }

  render() {
    const collection = this.props.collections[this.props.params.colid];
    if (!collection) return <div className='loading-indicator'></div>;
    let entry = collection.entries[this.props.params.entryid];
    if (!entry) entry = { content: "", title: "" };
    if (entry.published) {
      return this.renderPublished(collection, entry);
    } else {
      return this.renderEditing(collection, entry);
    }
  }

}

function mapStateToProps(state) {
  return {
    collections: state.collections
  }
}

const attachActions = {
  subscribe: collectionActions.subscribe,
  setEntryForCollection: collectionActions.setEntryForCollection,
}

export default connect(mapStateToProps, attachActions)(Entry);
