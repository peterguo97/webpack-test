import React from 'react';
import { List, NavBar, Icon, Picker, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import girl from 'assets/girl.jpg';

const Item = List.Item;
const Brief = Item.Brief;


const seasons = [
    [
        {label: '提醒归还' ,value: 'tests'},
        {label: '设备回收', value: 'cancel'},
    ]
];

class MyDevice extends React.Component {
    state = {
        sValue: '',
        show: false,
    }

    handleClick = () => {
        this.setState({
            show: true,
        })
    }

    render() {
        return (
            <div>
                <NavBar mode="dark" leftContent={<Link to='/me'><Icon style={{ color: '#fff' }} type="left" /></Link>}>我的设备</NavBar>
                <List renderHeader={()=>'设备状态'}>
                    <Item thumb={girl} multipleLine arrow="horizontal" disabled={true} onClick={this.handleClick} extra={<Button style={{background: 'lightseagreen', color: '#fff'}}>闲置中</Button>}>
                        51单片机 <Brief>test</Brief>
                    </Item>
                    <Item thumb={girl} multipleLine arrow="horizontal" disabled={true} onClick={this.handleClick} extra={<Button type="primary">借出中</Button>}>
                        51单片机 <Brief>test</Brief>
                    </Item>
                </List>
                 <Picker
                    visible={this.state.show}
                    data={seasons}
                    title="选择季节"
                    itemStyle={{fontSize: '20px'}}
                    cols={1}
                    cascade={false}
                    extra="请选择(可选)"
                    value={this.state.sValue}
                    onChange={v => {console.log(v);this.setState({ sValue: v })}}
                    onOk={v => this.setState({ sValue: v , show: false})}
                    onDismiss={v => this.setState({ sValue: '' , show: false})}
                >
                </Picker>
            </div>
        )
    }
}

export default MyDevice;