import React from 'react';
import { List, NavBar, Icon, Picker, Button } from 'antd-mobile';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        data: []
    }

    handleClick = () => {
        this.setState({
            show: true,
        })
    }

    componentDidMount = () => {
        axios.get('/mygoods').then((e)=> {
            this.setState({
                data: e.data
            })
        })
    }
    

    render() {
        return (
            <div>
                <NavBar mode="dark" leftContent={<Link to='/me'><Icon style={{ color: '#fff' }} type="left" /></Link>}>我的设备</NavBar>
                <List renderHeader={()=>'设备状态'}>
                    {
                        this.state.data.map((item,index)=> {
                            return(
                                <Item key={index} thumb={item.img1} multipleLine arrow="horizontal" disabled={true} onClick={this.handleClick} extra={<Button style={{ background: 'lightseagreen', color: '#fff' }}>{ +item.state ? '借出中' : '闲置中' }</Button>}>
                                    {item.name} <Brief>{item.detail}</Brief>
                                </Item>
                            )
                        })
                    }
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