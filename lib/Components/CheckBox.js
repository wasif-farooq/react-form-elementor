"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _Base2 = require("./Base");

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
var CheckBox =
/*#__PURE__*/
function (_Base) {
  _inherits(CheckBox, _Base);

  /**
   * 
   * @param Object props 
   * @return void
   */
  function CheckBox(props) {
    var _this;

    _classCallCheck(this, CheckBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckBox).call(this, props));
    _this.type = 'checkbox';
    _this.defaults = {
      id: '',
      name: '',
      value: '',
      "default": '',
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
   * @inherit
   * @param Object event 
   * @return String
   */


  _createClass(CheckBox, [{
    key: "getFieldValue",
    value: function getFieldValue(event) {
      return event.target.checked ? event.target.value : '';
    }
    /**
     * Built-in React function to render element on DOM
     */

  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      return _react["default"].createElement("input", _extends({
        type: this.type,
        id: this.state.id,
        value: this.state["default"],
        checked: this.state["default"] === value ? true : false,
        name: this.state.name || ''
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
      } : ''));
    }
  }]);

  return CheckBox;
}(_Base2.Base);

exports.CheckBox = CheckBox;