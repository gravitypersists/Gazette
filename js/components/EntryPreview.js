import React from 'react';
import { Link } from 'react-router';

export default class EntryPreview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let { entry } = this.props;
    return (
      <div>
        <div className='title'>{ entry.title }</div>
        <div className='content-preview'>{ entry.content }</div>
        <Link to={`/col/${ this.props.colid }/${ this.props.id }`}>
          <div className='attribution'></div>
        </Link>
      </div>
    )
  }

}
