import * as React from 'react';
import PropTypes from 'prop-types';
import jade from 'jade'

import { template } from './template'
import './SitePreview.css';

export const SitePreview = (props) => {
  const sitePreview = jade.compile(template);

  return (
    <div className="site-preview">
      Hello!
      <div dangerouslySetInnerHTML={{ __html: sitePreview({ name: 'Bob' }) }}></div>
    </div>
  );
}

SitePreview.prototype = {
  data: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}
