import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router/umd/ReactRouter'
import { createHashHistory } from 'history';

import { renderDevTools } from './utils/devTools';
import configureStore from './utils/configureStore';
import Home from './components/Home';
import Collection from './components/Collection';
import NoMatch from './components/NoMatch';
import styles from '../css/app.scss';
import Header from './components/Header';

const store = configureStore({});

const history = createHashHistory({ queryKey: false });
window.hackhistory = history;

export default React.createClass({
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Header />
            <Router history={ history }>
              <Route path='/' component={ Home } />
              <Route path='/col/:id' component={ Collection }/>
              <Route path='*' component={ NoMatch }/>
            </Router>
          </div>
        </Provider>

        {/* only renders when running in DEV mode */
          // renderDevTools(store)
        }
      </div>
    );
  }
});
