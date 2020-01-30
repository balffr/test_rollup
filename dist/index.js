'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var MyReactApp = function MyReactApp(props) {
  var width = props.width,
      height = props.height,
      bgColor = props.bgColor,
      color = props.color,
      content = props.content;
  return React.createElement("div", {
    style: {
      width: width || 200,
      height: height || 200,
      backgroundColor: bgColor || "green",
      color: color || "black"
    }
  }, content);
};

exports.MyReactApp = MyReactApp;
