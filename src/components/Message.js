import React from 'react';
import common from './css/detail.css';
import MessageDetail from './MessageDetail';
// import axios from 'axios';

class Message extends React.Component {

    // componentDidMount() {
    //     axios.get('/test/hello/boy').then((res)=>{
    //         console.log(res)
    //     })
    // }
    
    render(){
        return(
            <div className={common.wrapper}>
                <MessageDetail />
            </div>
        )
    }
}

export default Message;