import React from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
import common from '../css/detail.css';
import Talking from './talking';
import test from '../../assets/girl.jpg';
import axios from 'axios';

let limit = 20;

class Forum extends React.Component {
    state = {
      refreshing: false,
      height: document.documentElement.clientHeight,
      data: [],
    }

    handleRefresh = () => {
        this.setState({
            refreshing: true,
        })
        axios.get(`forum?limit=${limit}`).then((message) => {
            this.setState({
                data: message.data,
                refreshing: false,
            })
            limit += 20;
        }).catch((e)=>{
            Toast.fail("请求失败", 1);
        })

    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        this.setState({
            refreshing: true,
        })
        axios.get(`forum?limit=${limit}`).then((message) => {
            this.setState({
                data: message.data,
                refreshing: false,
            })
            limit += 20;
        }).catch((e)=>{
            Toast.fail("请求失败", 1);
        })
    }
    render(){
        return(
             <PullToRefresh
                damping={100}
                ref={el => this.ptr = el}
                style={{
                height: this.state.height,
                overflow: 'auto',
                }}
                indicator={{ deactivate: '上拉可以刷新' }}
                direction='up'
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
            >
                {this.state.data.map(item => (
                    <div key={item.id}>
                        <Link to={`/detail/${item.id}`}>
                            <Talking data={item} />
                        </Link>
                    </div>
                ))}
            </PullToRefresh>
        )
    }
}

export default Forum;