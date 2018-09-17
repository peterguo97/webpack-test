import React from 'react';
import { Link } from 'react-router-dom';
import { List, NavBar, Icon, Modal } from 'antd-mobile';
import axios from 'axios';

const Item = List.Item;
const Brief = Item.Brief;

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class DetailMessage extends React.Component {
    state = {
        data: {
            name: '',
            detail: '',
            phone: '',
            address: '',
            img1: '',
        },
        modal1: true,
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }

    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;
        axios.get('/notification?id=' + id).then((e)=> {
            this.setState({
                data: e.data
            })
        })
    }

    render() {
        let data = this.state.data;
        return (
            <div>
                <NavBar mode="dark" leftContent={<Link to='/notice'><Icon style={{ color: '#fff' }} type="left" /></Link>}>设备信息</NavBar>
                <List renderHeader={() => '设备信息'}>
                    <Item extra={data.name}>设备名称</Item>
                    <Item extra={data.detail}>设备详情</Item>
                    <Item extra={data.phone}>联系方式</Item>
                    <Item extra={data.address}>设备位置</Item>
                    <div style={{width: '80%', margin: '0 auto'}}>
                        <img src={data.img1} alt=""/>
                    </div>
                </List>
                 <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title="通知"
                    footer={[{ text: '确认', onPress: () => { this.onClose('modal1')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 100 }}>
                        请根据提示的地址<br />
                        以及联系方式，借<br />
                        用设备<br />
                    </div>
                </Modal>
            </div>);
    }
}

export default DetailMessage;