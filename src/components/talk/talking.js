import React from 'react'
import style from '../css/forum.css';
import comment from '../../assets/comments.png';

class Talking extends React.Component {
    render(){
        let data = this.props.data;
        return(
            <div className={style.talkingWrapper}>
                <div className={style.leftImg}>
                    <img src={data.img} alt="talkingImg"/>
                </div>
                <div className={style.rightContent}>
                    <div className={style.mainContent}>
                        <div className={style.commentText}>{data.title}</div>
                    </div>
                    <div className={style.comment}>
                        <span className={style.commentImg}><img src={comment} alt="static"/></span>
                        <span className={style.commentNum}>{data.comment}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Talking;