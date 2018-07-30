import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import DetailComment from 'components/detailComment';
import style from './css/common.css';
import girl from 'assets/girl.jpg';

const data = [
    {
        userImg: girl,
        author: 'petter',
        content: 'let me have a try',
        good: 57,
        bad: 10,
    },
    {
        userImg: girl,
        author: 'petter',
        content: 'let me have a try',
        good: 57,
        bad: 10
    },
    {
        userImg: girl,
        author: 'petter',
        content: 'let me have a try',
        good: 57,
        bad: 10,
    },
]

class Comment extends React.Component {
    render() {
        const list = data.map((item, index)=>{
            return(
                <div className={style.detailCommentItem} key={index}>
                    <DetailComment data={item} />
                </div>
            )
        })
        return (
            <div className={style.detailComment}>
                <div className={style.detailCommentTitle}>热门评论</div>
                { list }
                <div className={style.detailFooter}>
                    <div contentEditable="true" placeholder="发表评论" className={style.textArea}></div>
                    <div className={style.upload}></div>
                </div>
            </div>
        )
    }
}

export default Comment;