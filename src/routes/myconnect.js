import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon, List } from 'antd-mobile';
import girl from 'assets/girl.jpg';
import Axios from 'axios';
import ConnectWrapper from 'components/ConnectWrapper';
import ConnectItem from 'components/ConnectItem';

const Item = List.Item;

const data = {
    headimgurl: girl,
    relname: 'Lily',
    mobile: 123456767,
}
class MyConnect extends React.Component {
    state = {
        data: {}
    }
    componentDidMount = () => {
        Axios.get('/contact').then((mes)=>{
            this.setState({
                data: mes.data,
            })
        }).catch((e)=>{
            console.log(e);
        })
    }
    
    render() {
        let contact = this.state.data.contact || [];
        let book = this.state.data.book || [];
        let borrow = this.state.data.borrow || [];
        

        return (
            <div>
                <NavBar mode="dark" leftContent={<Link to="/app/me"><Icon style={{ color: '#fff' }} type="left" /></Link>}>联系人</NavBar>
                <ConnectWrapper title="常用联系人">
                    {
                        contact.map((item,index)=>{
                            return(
                                <ConnectItem data={item} key={index} isStar={item.state} />
                            )
                        })
                    }
                </ConnectWrapper>
                <ConnectWrapper title="正在排队">
                    {
                        book.map((item,index)=>{
                            return(
                                <ConnectItem data={item} key={index} isStar={item.state} />
                            )
                        })
                    }
                </ConnectWrapper>
                <ConnectWrapper title="我的借阅">
                {
                    borrow.map((item,index)=>{
                        return(
                            <ConnectItem data={item} key={index} isStar={item.state} />
                        )
                    })
                }
            </ConnectWrapper>
            </div>
        );
    }
}

export default MyConnect;
