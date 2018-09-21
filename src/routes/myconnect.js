import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon, List } from 'antd-mobile';
import Axios from 'axios';
import ConnectWrapper from 'components/ConnectWrapper';

const Item = List.Item;

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
        return (
            <div>
                <NavBar mode="dark" leftContent={<Link to="/app/me"><Icon style={{ color: '#fff' }} type="left" /></Link>}>联系人</NavBar>
                <ConnectWrapper title="正在借阅联系人">
                    <div>hello</div>
                </ConnectWrapper>
            </div>
        );
    }
}

export default MyConnect;
