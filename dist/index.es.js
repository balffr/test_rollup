import React from 'react';

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

export { MyReactApp };
//# sourceMappingURL=index.es.js.map
