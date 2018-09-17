import React from 'react';
import { List, NavBar, Icon, Picker, Button, Toast } from 'antd-mobile';
import axios from 'axios';
import { Link } from 'react-router-dom';
import girl from 'assets/girl.jpg';

const Item = List.Item;
const Brief = Item.Brief;


const seasons = [
    [
        { label: '归还物品', value: 'return' },
        { label: '物品续借', value: 'cancel' },
    ]
];

// const data = [
//     {id: 1, name: 'test', detail: 'hello world', img1: girl},
//     { id: 2, name: 'test', detail: 'hello world', img1: girl },
//     { id: 3, name: 'test', detail: 'hello world', img1: girl },
// ]

class BorrowDevice extends React.Component {
    state = {
        sValue: '',
        show: false,
        data: [],
        id: '',
    }

    handleClick = (id) => () => {
        console.log(id);
        this.setState({
            show: true,
            id: id
        })
    }

    handleOk = (v) => {
        if(v[0] === 'return') {
            axios.post('/return',{
                id: this.state.id
            }).then((e)=> {
                if(e.data) {
                    Toast.success('归还成功', 1);
                }
            })
        }
    }

    componentDidMount = () => {
        axios.get('/myborrow').then((e)=> {
            this.setState({
                data: e.data
            })
        })
    }
    

    render() {
        const data = this.state.data;
        return (
            <div>
                <NavBar mode="dark" leftContent={<Link to='/me'><Icon style={{ color: '#fff' }} type="left" /></Link>}>我的租借</NavBar>
                <List renderHeader={() => '设备状态'}>
                    {
                        data.map((item,index)=>{
                            return(
                                <Item key={item.id} thumb={item.img1} multipleLine arrow="horizontal" disabled={true} onClick={this.handleClick(item.id)} extra={<Button style={{ background: 'lightseagreen', color: '#fff' }}>借用中</Button>}>
                                    {item.name} <Brief>{item.detail}</Brief>
                                </Item>
                            )
                        })
                    }
                </List>
                <Picker
                    visible={this.state.show}
                    data={seasons}
                    title="我的续借"
                    itemStyle={{ fontSize: '20px' }}
                    cols={1}
                    cascade={false}
                    extra="请选择(可选)"
                    value={this.state.sValue}
                    onChange={v => {this.setState({ sValue: v }) }}
                    onOk={this.handleOk}
                    onDismiss={v => this.setState({ sValue: '', show: false })}
                >
                </Picker>
            </div>
        )
    }
}

export default BorrowDevice;