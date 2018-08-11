import React from 'react';
import { WingBlank, WhiteSpace, NavBar, Icon, Picker } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Comment from './Comment';
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

const seasons = {
    first: [
        [
            { label: '点赞该贴', value: 0 },
            { label: '举报该贴', value: 1 },
        ]
    ],
    second: [
        [
            { label: '涉嫌政治', value: 0 },
            { label: '有色情内容', value: 1 },
            { label: '违背社会道德', value: 2 },
        ]
    ]
}

class DetailTalk extends React.Component {
    state = {
        sValue: '',
        show: false,
        bad: false,
        data: seasons.first
    }

    handleClick = () => {
        this.setState({
            show: true,
        })
    }

    manageCard = (v) => {
        if(!this.state.bad) {
            if(v[0] === 1) {
                this.setState({
                    bad: true,
                    data: seasons.second,
                    sValue: '',
                })
                return;
            }
            else {
                console.log(v)
                return;
            }
        }
        else {
            console.log(v);
        }
    }

    render(){
        let imgList = data.imgs.map((item, index) => {
            return (
                <div key={index} className={style.detailImg}>
                    <img src={item} alt="luntan" />
                </div>
            )
        });
        return(
            <div className={style.mainBox}>
                <div className={style.top}>
                    <NavBar 
                        leftContent={<Link to='/'><Icon style={{ color: '#fff' }} type="left" /></Link>}
                        rightContent={<Icon onClick={this.handleClick} type="ellipsis" />}
                    >
                    热门帖子</NavBar>
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
                    <Comment />
                </div>
                <Picker
                    visible={this.state.show}
                    data={this.state.data}
                    title=""
                    itemStyle={{ fontSize: '20px' }}
                    cols={1}
                    cascade={false}
                    extra="请选择(可选)"
                    value={this.state.sValue}
                    onOk={this.manageCard}
                    onDismiss={v => this.setState({ sValue: '', show: false })}
                >
                </Picker>
            </div>
        )
    }
}

export default DetailTalk;