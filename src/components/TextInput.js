import React from 'react';
import * as BS from 'react-bootstrap';

const TextInput = ({ input, ...otherProps }) => (
  <BS.FormControl {...otherProps} {...input} />
);

export default TextInput;
