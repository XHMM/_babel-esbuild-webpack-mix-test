import React from "react";
import ReactDOM from "react-dom";
// import _ from "lodash-es";
import { get } from "lodash-es";

// console.log(_.get({ name: { age: 11 } }, "name.age")); // not tree shaking
console.log(get({ name: { age: 11 } }, "name.age"));

const App = () => {
  return <div>oh</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
