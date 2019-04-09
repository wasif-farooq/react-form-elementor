"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Option = function Option(props) {
  var value = props.value,
      label = props.label;
  return _react["default"].createElement("option", {
    value: value
  }, label);
};

exports.Option = Option;