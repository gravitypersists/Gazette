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
      <div className='collection'>
        <div className='title'>{ c.title }</div>
        <div className='date'>{ moment(c.date).fromNow() }</div>
        <div className='configuration'></div>
        <Link to={ `col/${id}` }>edit</Link>
      </div>
    );
  }

  render() {
    const { collections } = this.props;
    return (
      <div>{ _.map(collections, (c, id) => this.renderCollection(c, id)) }</div>
    )
  }

}
