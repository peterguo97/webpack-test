import React from 'react';
import { WingBlank, WhiteSpace, NavBar, Icon, Picker } from 'antd-mobile';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import style from './css/common.css';
import Loading from 'components/loading';

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
        loading: true,
        data: seasons.first,
        context: {
            reply: [],
            title: '',
            author: '',
            time: '',
            content: '',
            imgs: []
        }
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

    componentDidMount = () => {
        let id = this.props.match.params.talkingId;
        let storage = window.localStorage;
        axios.get('/detail?id=' + id).then((e)=>{
            this.setState({
                context: e.data,
                loading: false,
            })
        })
        // if(false) {
        //     console.log(1);
        //     this.setState({
        //         context: JSON.parse(storage.getItem(id)),
        //     })
        // }
        // else {
            
        // }
    }
    

    render(){
        let id = this.props.match.params.talkingId;
        let data = this.state.context;
        let imgList = data.imgs.map((item, index) => {
            return (
                <div key={index} className={style.detailImg}>
                    <img src={item} alt="luntan" />
                </div>
            )
        });
        return(
            <div className={style.mainBox}>
                <Loading show={this.state.loading} />
                <div className={style.top}>
                    <NavBar 
                        leftContent={<Link to='/'><Icon style={{ color: '#fff' }} type="left" /></Link>}
                        rightContent={<Icon onClick={this.handleClick} type="ellipsis" />}
                    >
                    热门帖子</NavBar>
                </div>
                <div className={style.middle}>
                    <div style={{padding: '0 10px', background: '#fff'}}>
                        <div className={style.detailTitle}>{data.topic_title}</div>
                        <div className={style.detailWrapper}>
                            <div className={style.detailText}>发帖人: {data.topic_nickname}</div>
                            <div className={style.detailText}>发帖时间： {data.topic_addtime}</div>
                        </div>
                        <div className={style.detailMainContent}>
                            {data.topic_content}
                        </div>
                        <div className={style.detailImgWrapper}>
                            { imgList }
                        </div>     
                    </div>
                    <Comment id={id} data={this.state.context.reply} />
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