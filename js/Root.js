import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router/umd/ReactRouter'
import { createHashHistory } from 'history';

import { renderDevTools } from './utils/devTools';
import configureStore from './utils/configureStore';
import Home from './components/Home';
import Collection from './components/Collection';
import NoMatch from './components/NoMatch';

const store = configureStore({});

export default React.createClass({
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={ createHashHistory({ queryKey: false }) }>
            <Route path='/' component={ Home }>
              <Route path='/col/:id' component={ Collection }/>
              <Route path='*' component={ NoMatch }/>
            </Route>
          </Router>
        </Provider>

        {/* only renders when running in DEV mode */
          // renderDevTools(store)
        }
      </div>
    );
  }
});
