import React from 'react';

export default class Icon extends React.Component {

  static get propTypes() {
    return {
      type: React.PropTypes.string.isRequired,
      background: React.PropTypes.string,
      shape: React.PropTypes.string,
      color: React.PropTypes.string,
      size: React.PropTypes.string,
      id: React.PropTypes.string,
      className: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      background: 'black',
      color: '#FFFFFF',
      shape: 'circle',
      id: '',
    };
  }

  calculateSVGStyles() {
    this.svgStyles = {
      fill: this.props.color,
    };
  }

  render() {
    this.calculateSVGStyles();
    return (
      <i
        className={`Icon ${this.props.type} ${this.props.className}`}
        style={{ background: this.props.background, borderRadius: this.props.shape === 'circle' ? '50%' : '0' }}
      >
        <svg
          style={this.svgStyles}
          dangerouslySetInnerHTML={{ __html: `<use xlink:href="/icons.svg#${this.props.type}"/>` }}/>
      </i>
    );
  }
}
