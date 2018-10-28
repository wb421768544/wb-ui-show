import React, { Component } from 'react';

import { Button,  Notification} from 'wb-react-ui';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Button plain = {true} onClick = {() => Notification({title: '成功', message: '这是一条成功的提示消息', type: 'success'})}>成功</Button>
        <Button plain = {true} onClick = {() => Notification({title: '警告', message: '这是一条警告的提示消息', type: 'warning'})}>警告</Button>
        <Button plain = {true} onClick = {() => Notification({title: '消息', message: '这是一条消息的提示消息', type: 'info'})}>消息</Button>
        <Button plain = {true} onClick = {() => Notification({title: '错误', message: '这是一条错误的提示消息', type: 'error'})}>错误</Button>
      </div>
    );
  }
}
 

export default App;