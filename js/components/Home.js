import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as collectionActions from '../actions/collections';
import styles from '../../css/app.css';

class Home extends Component {

  componentWillMount() {
    this.props.request();
  }

  render() {
    return (
      <main>
        <h1 className={styles.text}>Welcome !</h1>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    collections: state.collections
  }
}

const attachActions = {
  request: collectionActions.request
}

export default connect(mapStateToProps, attachActions)(Home)
