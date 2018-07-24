import React from 'react';
import style from './css/message.css';
import girl from 'assets/girl.jpg';
import good from 'assets/good.png';
import bad from 'assets/bad.png';

class DetailComment extends React.Component {
    render() {
        return(
            <div className={style.commentWrapper}>
                <div className={style.commentLeft}>
                    <img src={girl} alt=""/>
                </div>
                <div className={style.commentRight}>
                    <div className={style.commentAuthor}>petter</div>
                    <div className={style.commentTime}>1分前</div>
                    <div className={style.commentContent}>hello baby hi hello baby hihello baby hihello baby hihello baby hihello baby hihello baby hi</div>
                    <div className={style.commentFooter}>
                        <div className={style.commentStar}><img src={bad} alt="cai"/></div>
                        <div className={style.commentStar}><img src={good} alt="zan"/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailComment;