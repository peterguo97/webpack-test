import React from 'react';
import style from './css/message.css';

export default class MessageDetail extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className={style.messageWrap}>
               <div className={style.userImage}><img src={data.headimgurl} alt="user" /></div>
               <div className={style.content}>
                    <div className={style.userName}>{data.class}&nbsp;{data.relname}</div>
                    <div className={style.userInfo}>学号: {data.stuid}</div>
               </div>
               <div className={style.time}>{this.props.rightContent}</div>
            </div>
        );
    }
}
