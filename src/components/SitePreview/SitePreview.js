import * as React from 'react';
import PropTypes from 'prop-types';
import jade from 'jade'

import { template } from './template'
import './SitePreview.css';

export const SitePreview = (props) => {
  const sitePreview = jade.compile(template);

  return (
    <div className="site-preview">
      <div className="site-preview-container">
        <div dangerouslySetInnerHTML={{ __html: sitePreview({ name: 'Bob' }) }}></div>
      </div>
    </div>
  );
}

SitePreview.prototype = {
  data: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}
