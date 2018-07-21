import React from 'react';
import { WingBlank, WhiteSpace, NavBar } from 'antd-mobile';
import style from './css/common.css';
import test1 from 'assets/girl.jpg';

const data = {
    title: '求助帖',
    author: 'petter',
    time: '16点25分',
    content: '这是一个测试，这是一个小小的测试',
    imgs: [
        test1, test1, test1,
    ]
}

class DetailTalk extends React.Component {
    render(){
        let imgList = data.imgs.map((item, index) => {
            return (
                <div key={index} className={style.detailImg}>
                    <img src={item} alt="luntan" />
                </div>
            )
        });
        console.log(imgList);
        return(
            <div className={style.mainBox}>
                <div className={style.top}>
                    <NavBar>热门帖子</NavBar>
                </div>
                <div className={style.middle}>
                    <WingBlank>
                        <div className={style.detailTitle}>{data.title}</div>
                        <div className={style.detailWrapper}>
                            <div className={style.detailText}>发帖人: {data.author}</div>
                            <div className={style.detailText}>发帖时间： {data.time}</div>
                        </div>
                        <div className={style.detailMainContent}>
                            {data.content}
                        </div>
                        <div className={style.detailImgWrapper}>
                            { imgList }
                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default DetailTalk;