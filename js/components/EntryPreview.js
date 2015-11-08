import React from 'react';

export default class EntryPreview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        { this.props.entry.content }
      </div>
    )
  }

}
