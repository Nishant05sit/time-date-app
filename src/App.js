import React from "react";
import DateTime from "./Component/dateTime";

const App = function () {
  return (
    <div>
      <h1>Hello World</h1>
      <h2> My Name is Nishant Kumar</h2>
      <DateTime />

      <button type="button"> start </button>
      <button type="button"> Reset </button>
      <button type="button"> stop </button>
    </div>
  );
};

export default App;
