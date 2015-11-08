import React from 'react';

export default class Prompt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { config } = this.props;
    return (
      <div className='student-prompt'>
        <div className='overview'>
          <span className='title'>{ config.title }: </span>
          <span className='prompt-description'>{ config.prompt.description }</span>
        </div>
        <ul className='prompt-guidelines'>
          { config.prompt.guidelines.map(g => <li>{g}</li>) }
        </ul>
      </div>
    )
  }

}
