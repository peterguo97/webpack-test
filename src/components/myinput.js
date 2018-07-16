import React from 'react';
import { List, InputItem,WhiteSpace, Button } from 'antd-mobile';

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

  changeValue = (v) => {
      console.log(v);
    this.setState({
        value: v
    })
  }
  render() {
    return (
      <div>
        <List>
          <InputItem
            type="text"
            clear
            value={ this.state.value }
            onChange={this.changeValue}
          >{this.props.title}</InputItem>
        </List>
        < WhiteSpace />
        < Button type = "primary">提交</Button>
      </div>
    );
  }
}

export default MyInput;

