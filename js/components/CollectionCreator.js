import React from 'react';
import _ from 'lodash';

import prompts from '../content/prompts';
import CollectionConfig from './CollectionConfig';

export default class CollectionCreator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPick: null,
      currentPrompt: {}
    }
  }

  handlePick(name) {
    this.setState({
      currentPick: name,
      currentPrompt: prompts[name]
    })
  }

  handlePromptChange(p) {
    this.setState({ currentPrompt: p });
  }

  handleConfigChange(config) {
    this.setState({ currentConfig: config });
  }

  onCreate() {
    this.props.onCreate({
      type: this.state.currentPick,
      title: this.state.currentPick,
      prompt: this.state.currentPrompt
    })
  }

  render() {
    const currentConfig = { prompt: prompts[this.state.currentPick] };
    return (
      <div className='collection-creator'>
        <div className='create-header'>
          <h2>Choose your genre</h2>
          <span>We'll suggest sample student guidelines for each one. You can edit them, of course!</span>
        </div>
        <div className='genre-picker'>
          {
            _.map(prompts, (o, name) => {
              return (
                <div className='genre' onClick={ () => this.handlePick(name) }>
                  <div className='label'>{ name }</div>
                </div>
              )
            })
          }
        </div>
        {
          (this.state.currentPick) &&
          <div>
            <div className='create-header'>
              <h2>Assignment Details</h2>
              <span>Your students will see the information below when starting their assignment.</span>
            </div>
            <CollectionConfig config={ currentConfig } onChange={ this.handleConfigChange.bind(this) }/>
            <button className='create' onClick={ this.onCreate.bind(this) }>Create Assignments</button>
          </div>
        }
      </div>
    )
  }

}
