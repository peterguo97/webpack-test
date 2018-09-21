import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from '../css/common.css';
import { List } from 'antd-mobile';
import device from 'assets/device.png';
import up from 'assets/up.png';
import device1 from 'assets/device1.png';
import waiting from 'assets/waiting.png';
import connect from 'assets/connect.png';

const Item = List.Item;

// const data = {
//     headimgurl: device1,
//     relname: '焦点点'
// }
class Person extends React.Component {
    state = {
        data: {
            relname: '',
            headimgurl: '',
            class: '',
            stuid: '',
        },
    }

    componentDidMount = () => {
        axios.get('/user').then((e)=>{
            this.setState({
                data: e.data
            })
            if(window.localStorage) {
                let storage = window.localStorage;
                Object.keys(e.data).forEach((item,index)=>{
                    if(!storage.getItem(item)) {
                        storage.setItem(item, e.data[item])
                    }
                })
            }
        })
    }
    
    render() {
        let data = this.state.data;
        return (
            <div style={{ width: '100%' }}>
                <div className={style.personBack}>
                    <div className={style.backUserImage}>
                        <Link to="/change">
                            <img src={data.headimgurl} alt="user-image"/>
                        </Link>
                    </div>
                    <div style={{fontSize: '20px', color: '#fff', fontWeight: "bold", marginTop: '10px'}}>{data.relname}</div>
                </div>
                
                <List renderHeader={()=> '设备管理'}>
                    <div className={style.personItem}>
                        <Link to="/uploadDevice">
                            <Item thumb={up} arrow='horizontal'>上传设备</Item>
                        </Link>
                    </div>
                    <div className={style.personItem}>
                        <Link to="/myDevice">
                            <Item thumb={device} arrow='horizontal'>我的设备</Item>             
                        </Link>                        
                    </div>
                    <div className={style.personItem}>
                        <Link to="/borrowDevice">
                            <Item thumb={device1} arrow='horizontal'>借用设备</Item>
                        </Link>
                    </div>
                    <div className={style.personItem}>
                        <Link to="/myorder">
                            <Item thumb={waiting} arrow='horizontal'>我的预约</Item>
                        </Link>
                    </div>
                    <div className={style.personItem}>
                        <Link to="/myconnect">
                            <Item thumb={connect} arrow='horizontal'>我的联系人</Item>
                        </Link>
                    </div>
                </List>
            </div>
        );
    }
}

export default Person;
