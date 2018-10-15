import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'wb-react-ui';

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <Button>Hello, {name}!</Button>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
