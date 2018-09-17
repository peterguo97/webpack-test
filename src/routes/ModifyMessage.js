import React from 'react';
import { List, InputItem,WhiteSpace, Button, NavBar, Icon } from 'antd-mobile';
import axios from 'axios';

class ModifyMessage extends React.Component {
   constructor(props) {
        super(props);
        let title, value;
        if(this.props.match.params.type === "relname"){
            title = "姓名";
        }
        if (this.props.match.params.type === "stuid") {
          title = "学号";
        }
        if (this.props.match.params.type === "sex") {
          title = "性别";
        }
        if (this.props.match.params.type === "class") {
          title = "班级";
        }
        if (this.props.match.params.type === "mobile") {
            title = "联系方式";
          }
        this.state = {
            value: props.match.params.value,
            title: title
        }
    }

    back = () => {
      this.props.history.push('/change');
    }

    handleClick = () => {
        let value = this.state.value;
        if(!this.state.value) {
            Toast.fail(`${this.state.title}不能为空`, 1);
            return;
        }
        if(this.state.title === "性别") {
            if(this.state.value == '男' ) {
                value = 1;
            }
            else {
                value = 2;
            }
        }
        if(window.localStorage) {
            window.localStorage.setItem(this.props.match.params.type, value);
        }
        axios.get('/message?'+this.props.match.params.type + '=' + value).then((e)=>{
            if(e.data) {
                Toast.success('修改成功',1);
            }
        })
    }

    changeValue = (v) => {
        this.setState({
            value: v
        })
    }
    render() {
        return (
        <div>
            <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={this.back}>
                修改{this.state.title}
            </NavBar>
            < WhiteSpace / >
            <List>
            <InputItem
                type="text"
                clear
                value={ this.state.value }
                onChange={this.changeValue}
            >{this.state.title}</InputItem>
            </List>
            < WhiteSpace />
            < Button type = "primary" onClick={this.handleClick}>提交</Button>
        </div>
        );
    }
}

export default ModifyMessage;
