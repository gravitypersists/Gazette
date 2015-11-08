import React from 'react';

export default class Prompt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { prompt } = this.props;
    return (
      <div className='prompt'>
        <div className='description'>{ prompt.description }</div>
        <ul className='guidelines'>
          { prompt.guidelines.map(g => <li>{g}</li>) }
        </ul>
      </div>
    )
  }

}
