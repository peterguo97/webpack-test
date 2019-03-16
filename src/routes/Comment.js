import React from 'react';
import { WhiteSpace, Toast } from 'antd-mobile';
import axios from 'axios';
import DetailComment from 'components/detailComment';
import style from './css/common.css';

// const data = [
//     {
//         userImg: girl,
//         author: 'petter',
//         content: 'let me have a try',
//         good: 57,
//         bad: 10,
//     },
//     {
//         userImg: girl,
//         author: 'petter',
//         content: 'let me have a try',
//         good: 57,
//         bad: 10
//     },
//     {
//         userImg: girl,
//         author: 'petter',
//         content: 'let me have a try',
//         good: 57,
//         bad: 10,
//     },
// ]

class Comment extends React.Component {
    state = {
        value: '',
        data: []
    }

    handleClick = () => {
        
        let content = this.refs['comment'].innerHTML;
        if( ! content ) {
            Toast.fail('你还未添加评论', 1);
            return;
        }
        axios.post('/replyadd',{id: this.props.id, content: content}).then((e)=>{
            if(e.status === 200) {
                Toast.info('评论成功',1);
            }
        }).catch((e)=> {
            Toast.fail('发表失败',1);
        })
    }

    render() {
        const data = this.props.data;
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
                    <div contentEditable="true" ref="comment" placeholder="发表评论" className={style.textArea}></div>
                    <div onClick={this.handleClick} className={style.upload}></div>
                </div>
            </div>
        )
    }
}

export default Comment;