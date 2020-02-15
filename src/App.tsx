import React from "react";
import logo from "./assets/img/logo.svg";
import "./assets/App.less";
import { Button, Icon } from "antd";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button size="large" type="primary">
          <Icon type="user"></Icon> <b>AntDesign Button</b>
        </Button>
      </header>
    </div>
  );
};

export default App;
