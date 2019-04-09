"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * This is a Base class for form elements componenets that has its events callbacks.
 */
var Base =
/*#__PURE__*/
function (_Component) {
  _inherits(Base, _Component);

  /**
   * 
   * @param Object props 
   * @return void
   */
  function Base(props) {
    var _this;

    _classCallCheck(this, Base);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Base).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onKeyPress = _this.onKeyPress.bind(_assertThisInitialized(_this));
    _this.onKeyUp = _this.onKeyUp.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onSelectStart = _this.onSelectStart.bind(_assertThisInitialized(_this));
    _this.state = Object.assign({}, _this.defaults, _this.events, props);
    return _this;
  }
  /**
   * 
   * @param String|Array|Object value 
   * @param Function callback 
   * @return void
   */


  _createClass(Base, [{
    key: "emit",
    value: function emit(value, event, callback) {
      if (callback) {
        callback(value, event.target.name, event);
      }
    }
    /**
     * 
     * @param Object event
     * @return String|Array|Object
     */

  }, {
    key: "getFieldValue",
    value: function getFieldValue(event) {
      return event.target.value;
    }
    /**
     * @return String|Array|Object
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onChange",
    value: function onChange(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onChange);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onBlur);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onFocus",
    value: function onFocus(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onFocus);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onKeyPress",
    value: function onKeyPress(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onKeyPress);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onKeyUp);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onKeyDown);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onClick);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onMouseDown);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onMouseUp);
    }
    /**
     * 
     * @param Object event
     * @return void
     */

  }, {
    key: "onSelectStart",
    value: function onSelectStart(Event) {
      var value = this.getFieldValue(event);
      this.emit(value, event, this.state.onSelectStart);
    }
    /**
     * 
     * @param Object props 
     * @param Object state 
     * @return void
     */

  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(props, state) {
      state = Object.assign(state, props);
    }
  }]);

  return Base;
}(_react.Component);

exports.Base = Base;