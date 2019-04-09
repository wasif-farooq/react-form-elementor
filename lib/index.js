"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TextBox", {
  enumerable: true,
  get: function get() {
    return _TextBox.TextBox;
  }
});
Object.defineProperty(exports, "TextArea", {
  enumerable: true,
  get: function get() {
    return _TextArea.TextArea;
  }
});
Object.defineProperty(exports, "Password", {
  enumerable: true,
  get: function get() {
    return _Password.Password;
  }
});
Object.defineProperty(exports, "Hidden", {
  enumerable: true,
  get: function get() {
    return _Hidden.Hidden;
  }
});
Object.defineProperty(exports, "CheckBox", {
  enumerable: true,
  get: function get() {
    return _CheckBox.CheckBox;
  }
});
Object.defineProperty(exports, "RadioBox", {
  enumerable: true,
  get: function get() {
    return _RadioBox.RadioBox;
  }
});
Object.defineProperty(exports, "DropDown", {
  enumerable: true,
  get: function get() {
    return _DropDown.DropDown;
  }
});
Object.defineProperty(exports, "MultiSelect", {
  enumerable: true,
  get: function get() {
    return _MultiSelect.MultiSelect;
  }
});
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function get() {
    return _File.File;
  }
});
exports.events = void 0;

var _TextBox = require("./Components/TextBox");

var _TextArea = require("./Components/TextArea");

var _Password = require("./Components/Password");

var _Hidden = require("./Components/Hidden");

var _CheckBox = require("./Components/CheckBox");

var _RadioBox = require("./Components/RadioBox");

var _DropDown = require("./Components/DropDown");

var _MultiSelect = require("./Components/MultiSelect");

var _File = require("./Components/File");

var events = function events(Component) {
  var onChange = Component.prototype.onChange || false;

  Component.prototype.onChange = function (value, name, event) {
    var state = this.state;
    state[name] = value;
    this.setState(state);
    onChange ? onChange.call(Component, value, name, event) : '';
  };

  return Component;
};

exports.events = events;