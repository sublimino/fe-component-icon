'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Icon = (function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    _React$Component.apply(this, arguments);
  }

  Icon.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.icon !== nextProps.icon || this.props.background !== nextProps.background || this.props.color !== nextProps.color || this.props.size !== nextProps.size || this.props.className !== nextProps.className || this.props.uri !== nextProps.uri;
  };

  Icon.prototype.render = function render() {
    var props = {
      role: 'img',
      className: 'Icon Icon-' + this.props.icon,
      /* eslint react/no-danger: 0, id-match: 0 */
      // Justification: JSX does not support namespaced
      // attributes such as `xmlns:xlink` or `xlink:href`.
      dangerouslySetInnerHTML: {
        // use string literals here to avoid extraneous newline chars
        __html: '<use ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + ('xlink:href="' + this.props.uri + '#' + this.props.icon + '"') + '></use>'
      }
    };
    if (this.props.color) {
      props.fill = this.props.color;
    }
    if (this.props.size) {
      props.width = this.props.size;
      props.height = this.props.size;
    }
    if (this.props.className) {
      props.className += ' ' + this.props.className;
    }
    if (this.props.background) {
      props.style = { background: this.props.background };
    }
    return _react2['default'].createElement('svg', props);
  };

  _createClass(Icon, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        icon: _react2['default'].PropTypes.string.isRequired,
        background: _react2['default'].PropTypes.string,
        color: _react2['default'].PropTypes.string,
        size: _react2['default'].PropTypes.string,
        className: _react2['default'].PropTypes.string,
        uri: _react2['default'].PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        className: '',
        uri: '/assets/icons.svg',
        size: '60px'
      };
    }
  }]);

  return Icon;
})(_react2['default'].Component);

exports['default'] = Icon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7cUJBQWtCLE9BQU87Ozs7SUFFSixJQUFJO1lBQUosSUFBSTs7V0FBSixJQUFJOzBCQUFKLElBQUk7Ozs7O0FBQUosTUFBSSxXQXFCdkIscUJBQXFCLEdBQUEsK0JBQUMsU0FBUyxFQUFFO0FBQy9CLFdBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksSUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLFVBQVUsSUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLEtBQUssSUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksSUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFNBQVMsSUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FDaEM7R0FDSDs7QUE5QmtCLE1BQUksV0FnQ3ZCLE1BQU0sR0FBQSxrQkFBRztBQUNQLFFBQU0sS0FBSyxHQUFHO0FBQ1osVUFBSSxFQUFFLEtBQUs7QUFDWCxlQUFTLGlCQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUFFOzs7O0FBSXpDLDZCQUF1QixFQUFFOztBQUV2QixjQUFNLEVBQUUsT0FBTyxHQUNiLDZDQUE2QyxxQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQUcsR0FDckQsU0FBUztPQUNWO0tBQ0YsQ0FBQztBQUNGLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDcEIsV0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztLQUMvQjtBQUNELFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDbkIsV0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUM5QixXQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0tBQ2hDO0FBQ0QsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUN4QixXQUFLLENBQUMsU0FBUyxVQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxBQUFFLENBQUM7S0FDL0M7QUFDRCxRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ3pCLFdBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNyRDtBQUNELFdBQVEsd0NBQVMsS0FBSyxDQUFHLENBQUU7R0FDNUI7O2VBN0RrQixJQUFJOztTQUVILGVBQUc7QUFDckIsYUFBTztBQUNMLFlBQUksRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDdkMsa0JBQVUsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNsQyxhQUFLLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDN0IsWUFBSSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQzVCLGlCQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDakMsV0FBRyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO09BQzVCLENBQUM7S0FDSDs7O1NBRXNCLGVBQUc7QUFDeEIsYUFBTztBQUNMLGlCQUFTLEVBQUUsRUFBRTtBQUNiLFdBQUcsRUFBRSxtQkFBbUI7QUFDeEIsWUFBSSxFQUFFLE1BQU07T0FDYixDQUFDO0tBQ0g7OztTQW5Ca0IsSUFBSTtHQUFTLG1CQUFNLFNBQVM7O3FCQUE1QixJQUFJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wVHlwZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJhY2tncm91bmQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjb2xvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNpemU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB1cmk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgdXJpOiAnL2Fzc2V0cy9pY29ucy5zdmcnLFxuICAgICAgc2l6ZTogJzYwcHgnLFxuICAgIH07XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuaWNvbiAhPT0gbmV4dFByb3BzLmljb24gfHxcbiAgICAgIHRoaXMucHJvcHMuYmFja2dyb3VuZCAhPT0gbmV4dFByb3BzLmJhY2tncm91bmQgfHxcbiAgICAgIHRoaXMucHJvcHMuY29sb3IgIT09IG5leHRQcm9wcy5jb2xvciB8fFxuICAgICAgdGhpcy5wcm9wcy5zaXplICE9PSBuZXh0UHJvcHMuc2l6ZSB8fFxuICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09IG5leHRQcm9wcy5jbGFzc05hbWUgfHxcbiAgICAgIHRoaXMucHJvcHMudXJpICE9PSBuZXh0UHJvcHMudXJpXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIHJvbGU6ICdpbWcnLFxuICAgICAgY2xhc3NOYW1lOiBgSWNvbiBJY29uLSR7dGhpcy5wcm9wcy5pY29ufWAsXG4gICAgICAvKiBlc2xpbnQgcmVhY3Qvbm8tZGFuZ2VyOiAwLCBpZC1tYXRjaDogMCAqL1xuICAgICAgLy8gSnVzdGlmaWNhdGlvbjogSlNYIGRvZXMgbm90IHN1cHBvcnQgbmFtZXNwYWNlZFxuICAgICAgLy8gYXR0cmlidXRlcyBzdWNoIGFzIGB4bWxuczp4bGlua2Agb3IgYHhsaW5rOmhyZWZgLlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgLy8gdXNlIHN0cmluZyBsaXRlcmFscyBoZXJlIHRvIGF2b2lkIGV4dHJhbmVvdXMgbmV3bGluZSBjaGFyc1xuICAgICAgICBfX2h0bWw6ICc8dXNlICcgK1xuICAgICAgICAgICd4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiAnICtcbiAgICAgICAgICBgeGxpbms6aHJlZj1cIiR7dGhpcy5wcm9wcy51cml9IyR7dGhpcy5wcm9wcy5pY29ufVwiYCArXG4gICAgICAgICc+PC91c2U+JyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAodGhpcy5wcm9wcy5jb2xvcikge1xuICAgICAgcHJvcHMuZmlsbCA9IHRoaXMucHJvcHMuY29sb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgIHByb3BzLndpZHRoID0gdGhpcy5wcm9wcy5zaXplO1xuICAgICAgcHJvcHMuaGVpZ2h0ID0gdGhpcy5wcm9wcy5zaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgIHByb3BzLmNsYXNzTmFtZSArPSBgICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YDtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYmFja2dyb3VuZCkge1xuICAgICAgcHJvcHMuc3R5bGUgPSB7IGJhY2tncm91bmQ6IHRoaXMucHJvcHMuYmFja2dyb3VuZCB9O1xuICAgIH1cbiAgICByZXR1cm4gKDxzdmcgey4uLnByb3BzfS8+KTtcbiAgfVxufVxuIl19