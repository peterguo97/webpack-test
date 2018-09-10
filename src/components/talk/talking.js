import React from 'react';
import style from '../css/forum.css';
import comment from '../../assets/comments.png';

class Talking extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className={style.talkingWrapper}>
                <div className={style.leftImg}>
                    <img src={data.pic} alt="talkingImg" />
                </div>
                <div className={style.rightContent}>
                    <div className={style.mainContent}>
                        <div className={style.commentText}>{data.title}</div>
                    </div>
                    <div className={style.comment}>
                        <div className={style.addtime}>
                            <span>发帖时间:</span>
                            <span>{data.addtime}</span>
                        </div>
                        <div className={style.commentNum}>
                            <span className={style.commentImg}><img src={comment} alt="static" /></span>
                            <span style={{ marginLeft: '2px', fontSize: '13px' }}>{data.reply_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Talking;
