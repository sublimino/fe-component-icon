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
      className: '',
      uri: '/assets/icons.svg',
      size: '60px',
    };
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.icon !== nextProps.icon ||
      this.props.background !== nextProps.background ||
      this.props.color !== nextProps.color ||
      this.props.size !== nextProps.size ||
      this.props.className !== nextProps.className ||
      this.props.uri !== nextProps.uri
    );
  }

  render() {
    return (
      <svg
        role="img"
        className={`Icon Icon-${this.props.icon} ${this.props.className}`}
        width={this.props.size}
        height={this.props.size}
        fill={this.props.color}
        style={{
          background: this.props.background,
        }}
        /* eslint react/no-danger: 0*/
        dangerouslySetInnerHTML={{
          // use string literals here to avoid extraneous newlinw chars
        /* eslint id-match: 0*/
          __html: '<use ' +
            'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
            `xlink:href="${this.props.uri}#${this.props.icon}"` +
          '></use>',
        }}
      />
    );
  }
}
