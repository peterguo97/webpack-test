import React from 'react';
import { List, InputItem,WhiteSpace, Button, NavBar, Icon } from 'antd-mobile';

class ModifyMessage extends React.Component {
   constructor(props) {
        super(props);
        let title;
        if(this.props.match.params.type === "name"){
            title = "姓名"
        }
        if (this.props.match.params.type === "sid") {
          title = "学号"
        }
        if (this.props.match.params.type === "sex") {
          title = "性别"
        }
        if (this.props.match.params.type === "gender") {
          title = "班级"
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
