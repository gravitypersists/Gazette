import React from 'react';
import DatePicker from 'react-datepicker';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import classnames from 'classnames';

import Prompt from './Prompt';

export default class CollectionConfig extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  onPromptChange(prompt) {

  }

  handleDateChange(d) {
    let dueDate = d.toString()
    this.props.onChange(
      Object.assign({}, this.props.config, { dueDate })
    );
  }

  handleTitleChange(e) {
    let title = e.target.value;
    this.props.onChange(
      Object.assign({}, this.props.config, { title })
    );
  }

  render() {
    let { config } = this.props;
    return (
      <div className='collection-config'>
        <div className='left'>
          <div className='input-group'>
            <span className='label'>Name</span>
            <input className='title' type='text' value={ config.title } onChange={ this.handleTitleChange.bind(this) }/>
          </div>
          <span className='prompt-label'>Guidelines</span>
          <ul className='guidelines'>
            { config.prompt.guidelines.map(g => <li>{g}</li>) }
          </ul>
        </div>
        <div className='right'>
          <div className='input-group'>
            <span className='label'>Due Date</span>
            <DatePicker selected={ moment(config.dueDate) } onChange={ this.handleDateChange.bind(this) } />
          </div>
          <span className='prompt-label'>Prompt</span>
          <div className='description'>{ config.prompt.description }</div>
        </div>
      </div>
    )
  }

}
