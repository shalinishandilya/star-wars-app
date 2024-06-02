import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import StarWarsComponent from './StarWarsComponent';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <StarWarsComponent />
      </div>
    </Provider>
  );
};

export default App;
