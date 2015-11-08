import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router';

export default class CollectionBrowser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  renderCollection(c, id) {
    return (
      <Link to={ `col/${id}` }>
        <div className='collection'>
          <div className='title'>{ c.type }</div>
          <div className='description'>{ c.prompt.description }</div>
          <div className='status'></div>
        </div>
      </Link>
    );
  }

  render() {
    const { collections } = this.props;
    return (
      <div className='collection-browser'>
        <button className='addButton' onClick={ this.props.onAdd }>
          <div className='circle'>
            <div className='slash'></div>
            <div className='slash dash'></div>
          </div>
          <span className='slash-label'>Create new assignment</span>
        </button>
        { _.map(collections, (c, id) => this.renderCollection(c, id)) }
      </div>
    )
  }

}
