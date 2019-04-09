"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDown = void 0;

var _react = _interopRequireDefault(require("react"));

var _Base2 = require("./Base");

var _Option = require("./Option");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 */
var DropDown =
/*#__PURE__*/
function (_Base) {
  _inherits(DropDown, _Base);

  /**
   * 
   * @param Object props 
   * @return void
   */
  function DropDown(props) {
    var _this;

    _classCallCheck(this, DropDown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropDown).call(this, props));
    _this.type = 'select';
    _this.multiple = false;
    _this.defaults = {
      name: '',
      value: [],
      options: [],
      classes: '',
      disabled: false
    };
    _this.events = {
      onClick: false,
      onBlur: false,
      onFocus: false,
      onMouseDown: false,
      onMouseUp: false,
      onSelectStart: false
    };
    return _this;
  }
  /**
   * Built-in React function to render element on DOM
   */


  _createClass(DropDown, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          options = _this$state.options;
      return _react["default"].createElement("select", _extends({
        id: this.state.name,
        name: this.state.name || '',
        multiple: this.multiple,
        value: value
      }, this.state.classes ? {
        className: this.state.classes
      } : '', !!this.state.disabled ? {
        disabled: !!this.state.disabled
      } : '', this.onChange ? {
        onChange: this.onChange
      } : '', this.state.onBlur ? {
        onBlur: this.onBlur
      } : '', this.state.onFocus ? {
        onFocus: this.onFocus
      } : '', this.state.onMouseDown ? {
        onMouseDown: this.onMouseDown
      } : '', this.state.onMouseUp ? {
        onMouseUp: this.onMouseUp
      } : '', this.state.onSelectStart ? {
        onSelectStart: this.onSelectStart
      } : ''), options.map(function (option) {
        return _react["default"].createElement(_Option.Option, {
          key: option.value,
          value: option.value,
          label: option.label
        });
      }));
    }
  }]);

  return DropDown;
}(_Base2.Base);

exports.DropDown = DropDown;