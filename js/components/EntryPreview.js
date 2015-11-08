import React from 'react';
import { Link } from 'react-router';

export default class EntryPreview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  renderUnpublished() {
    let { entry } = this.props;
    return (
      <div>
        <div className='title'>{ entry.title }</div>
        <div className='content-preview' dangerouslySetInnerHTML={{ __html:entry.content }}></div>
        <Link to={`/col/${ this.props.colid }/${ this.props.id }`}>
          <div className='attribution'></div>
        </Link>
      </div>
    )
  }

  renderPublished() {
    let { entry } = this.props;
    return (
      <div>
        <div className='fade'></div>
        <div className='entry-preview-published'>
          <div className='title'>{ entry.title }</div>
          <div className='entry-content' dangerouslySetInnerHTML={{ __html:entry.content }}></div>
          <Link className='read-more' to={`/col/${ this.props.colid }/${ this.props.id }`}>
            Read more
          </Link>
        </div>
      </div>
    )
  }

  render() {
    let { entry } = this.props;
    if (entry.published) {
      return this.renderPublished();
    } else {
      return this.renderUnpublished();
    }
  }

}
