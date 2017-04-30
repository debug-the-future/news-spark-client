import * as React from 'react';
import PropTypes from 'prop-types';
import jade from 'jade';
import * as BS from 'react-bootstrap';
import * as _ from 'lodash';

import { template } from './template'
import './SitePreview.css';

const validateURL = (url) => {
  const isValid = url &&
  url.length &&
  url.indexOf('http') > -1 &&
  url.indexOf('.') > -1 &&
  url.indexOf('/') > -1

  if (isValid) {
    return (url.indexOf('youtube') > -1 && url.indexOf('watch?v=') > -1)
      ? url.replace('watch?v=', 'embed/')
      : url;
  }

  return false;
}

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

  sitePreview = jade.compile(template);

  constructor(props) {
    super(props);
    this.state = {
      previewSize: 'mobile',
      templateString: this.sitePreview(this.getTemplateData(this.props)),
      loading: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const oldData = this.getTemplateData(this.props);
    const newData = this.getTemplateData(nextProps);

    if (!_.isEqual(oldData, newData)) {
      this.setState({ loading: true });
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(this.updateTemplateString, 300);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.debounceTimer);
  }

  updateTemplateString = () => {
    const templateString = this.sitePreview(this.getTemplateData(this.props));
    this.setState({ templateString, loading: false });
  }

  getTemplateData = ({ data }) => ({
    headline: data.headline || 'Cause Name Here',
    hashtag: data.hashtag || 'HashTag',
    asset: validateURL(data.asset) || ' ',
    what: data.what || 'What is happening placeholder.',
    details: data.details || 'Details placeholder text.',
    help: data.help || 'Help',
    contact: data.contact || 'Contact Info'
  })

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

    return (
      <div className="site-preview">
        <div className="clearfix">
          <BS.Nav className="pull-right" activeKey={this.state.previewSize} onSelect={this.setPreviewSize} bsStyle="pills">
            <BS.NavItem eventKey={'mobile'}>mobile</BS.NavItem>
            <BS.NavItem eventKey={'tablet'}>tablet</BS.NavItem>
            <BS.NavItem eventKey={'desktop'}>desktop</BS.NavItem>
          </BS.Nav>
        </div>
        <div className={`
          site-preview-container
          ${this.state.previewSize}
          ${this.state.loading ? 'is-loading' : ''}
        `}>
          <iframe
            className="iframe"
            srcDoc={this.state.templateString}
            frameBorder="0"
            style={this.getStylesForZoom(this.getZoomAmount())}>
          >
          </iframe>
        </div>
      </div>
    );
  }
}
