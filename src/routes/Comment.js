import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import DetailComment from 'components/detailComment';
import style from './css/common.css';

class Comment extends React.Component {
    render() {
        return (
            <div className={style.detailComment}>
                <div className={style.detailCommentTitle}>热门评论</div>
                <DetailComment />
                <div className={style.detailFooter}>
                    <div contenteditable="true" placeholder="发表评论" className={style.textArea}></div>
                    <div className={style.upload}></div>
                </div>
            </div>
        )
    }
}

export default Comment;