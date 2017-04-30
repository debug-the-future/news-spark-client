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

  getZoomAmount = () => {
    switch(this.state.previewSize) {
      case 'desktop':
        return 0.33;
      case 'tablet':
        return 0.5;
      case 'mobile':
      default:
        return 1;
    }
  }

  getStylesForZoom = (zoom) => {
    if (zoom > 1) {
      return {
        background: '#FFF',
        position: 'absolute',
        height: '100%',
        width: (100 / zoom) + '%',
        left: 50 * (1 - 1 / zoom) + '%',
      };
    }

    return {
      background: '#FFF',
      transform: 'scale(' + zoom + ')',
      transformOrigin: '0 0',
      height: (100 / zoom) + '%',
      width: (100 / zoom) + '%',
    };
  }

  render() {
    const sitePreview = jade.compile(template);
    const formData = this.props.data;
    const data = {
      headline: formData.headline || 'Cause Name Here',
      hashtag: formData.hashtag || 'HashTag',
      asset: formData.asset || 'https://www.youtube.com/embed/-_Pb0Abb6hc?rel=0',
      what: formData.what || 'What is happening placeholder.',
      details: formData.details || 'Details placeholder text.',
      help: formData.help || 'Help',
      contact: formData.help || 'Contact Info'      
    }

    return (
      <div className="site-preview">
        <div className="clearfix">
          <BS.Nav className="pull-right" activeKey={this.state.previewSize} onSelect={this.setPreviewSize} bsStyle="pills">
            <BS.NavItem eventKey={'mobile'}>mobile</BS.NavItem>
            <BS.NavItem eventKey={'tablet'}>tablet</BS.NavItem>
            <BS.NavItem eventKey={'desktop'}>desktop</BS.NavItem>
          </BS.Nav>
        </div>
        <div className={`site-preview-container ${this.state.previewSize}`}>
          <iframe
            className="iframe"
            srcDoc={sitePreview(data)}
            frameBorder="0"
            style={this.getStylesForZoom(this.getZoomAmount())}>
          >
          </iframe>
        </div>
      </div>
    );
  }
}
