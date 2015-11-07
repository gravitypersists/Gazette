import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './utils/configureStore';
import Home from './components/Home';
import {renderDevTools} from './utils/devTools';

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <div>
        <Provider store={store}>
          <Home />
        </Provider>

        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
});
