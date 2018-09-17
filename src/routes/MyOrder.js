import React from 'react'
import { List, NavBar, Icon, Picker, Button } from 'antd-mobile';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Item = List.Item;
const Brief = Item.Brief;

class MyOrder extends React.Component {
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
        axios.get('/mybook').then((e) => {
            this.setState({
                data: e.data
            })
        })
    }


    render() {
        return (
            <div>
                <NavBar mode="dark" leftContent={<Link to='/me'><Icon style={{ color: '#fff' }} type="left" /></Link>}>我的预约</NavBar>
                <List renderHeader={() => '设备预约状态'}>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <Item key={index} thumb={item.img1} multipleLine arrow="horizontal" disabled={true} onClick={this.handleClick} extra={<Button style={{ background: 'lightseagreen', color: '#fff' }}>{(+item.num) ? `当前排队${item.num}人` : '成功预约'}</Button>}>
                                    {item.name} <Brief>{item.detail}</Brief>
                                </Item>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}

export default MyOrder;