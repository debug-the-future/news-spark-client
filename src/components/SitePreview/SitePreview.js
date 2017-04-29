import * as React from 'react';
import PropTypes from 'prop-types';
import jade from 'jade';
import * as BS from 'react-bootstrap';

import { template } from './template'
import './SitePreview.css';

export class SitePreview extends React.Component {
  prototype = {
    data: PropTypes.shape({
      headline: PropTypes.string,
      what: PropTypes.string,
      asset: PropTypes.string,
      details: PropTypes.string,
      hashtag: PropTypes.string,
    }).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      previewSize: 'mobile'
    }
  }

  setPreviewSize = (size) => {
    this.setState({ previewSize: size });
  }

  render() {
    const sitePreview = jade.compile(template);

    return (
      <div className="site-preview">
        <div>
          <BS.Nav activeKey={this.previewSize} onSelect={this.setPreviewSize} bsStyle="pills">
            <BS.NavItem eventKey={'mobile'}>mobile</BS.NavItem>
            <BS.NavItem eventKey={'tablet'}>tablet</BS.NavItem>
            <BS.NavItem eventKey={'desktop'}>desktop</BS.NavItem>
          </BS.Nav>
        </div>
        <div className={`site-preview-container ${this.state.previewSize}`}>
          <div dangerouslySetInnerHTML={{ __html: sitePreview(this.props.data) }}></div>
        </div>
      </div>
    );
  }
}
