import React from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, Toast, List } from 'antd-mobile';
import down1 from 'assets/down1.png';
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
        axios.get(`/api/fileshow?limit=${limit}`).then((message) => {
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
        axios.get(`/forum?limit=${limit}`).then((message) => {
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
                height: '100%',
                overflow: 'auto',
                }}
                indicator={{ deactivate: '上拉可以刷新' }}
                direction='up'
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
            >
                {this.state.data.map(item => (
                    <List renderHeader={() => '热门下载'} className="my-list">
                        <Item extra={<a href={item.address}><img src={down1} alt="download" /></a>}>{item.name}</Item>
                    </List>
                ))}
            </PullToRefresh>
        )
    }
}

export default Forum;