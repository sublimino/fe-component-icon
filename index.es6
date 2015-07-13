import React from 'react';

export default class Icon extends React.Component {

  static get propTypes() {
    return {
      icon: React.PropTypes.string.isRequired,
      background: React.PropTypes.string,
      color: React.PropTypes.string,
      size: React.PropTypes.string,
      className: React.PropTypes.string,
      uri: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      uri: '/assets/icons.svg',
      background: 'black',
      color: '#FFFFFF',
      size: '60px',
    };
  }

  render() {
    return (
      <i
        className={`Icon Icon-${this.props.icon} ${this.props.className || ''}`}
        style={{ background: this.props.background, width: this.props.size, height: this.props.size }}
      >
        <svg role="img"
          style={{ fill: this.props.color }}
          dangerouslySetInnerHTML={{ __html: `<use xlink:href="${this.props.uri}#${this.props.icon}"/>` }}/>
      </i>
    );
  }
}
