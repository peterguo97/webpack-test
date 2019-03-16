import React from 'react';
import { List, Toast } from 'antd-mobile';
import style from './css/connect.css';
import Heart from 'assets/heart.svg';
import Axios from 'axios';

const Item = List.Item;

class ConnectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStar: props.isStar || false,
        }
    }

    handleClick = () => {
        let isStar = this.state.isStar;
        Axios.post('/contactadd',{
            state: Number(!isStar),
            openid: this.props.data.openid,
        }).then((mes)=>{
            if(isStar) {
                Toast.success('已取消关注', 2);
            }
            else {
                Toast.success('已添加到关注列表', 2);
            }
            this.setState({
                isStar: ! isStar,
            })
        }).catch((e)=>{
            Toast.fail('请求出错', 2);
        })
    }

    render() {
        const data = this.props.data;
        const List = data.hasOwnProperty('goodsname') ? (
             <div style={{fontSize: '12px' }}>
                <span>设备名称:</span>
                <span>{data.goodsname}</span>
            </div>) : '';
            
        return (
            <div className={style.box}>
                <Item thumb={data.headimgurl} extra={<Heart onClick={this.handleClick} width="40px" height="40px" fill={this.state.isStar ? 'red' : ''} />}>
                    <div>{data.relname}</div>
                    <div style={{fontSize: '12px' }}>
                        <span>联系方式:</span>
                        <span>{data.mobile}</span>
                    </div>
                    {List}
                </Item>
            </div>
        );
    }
}

export default ConnectItem;