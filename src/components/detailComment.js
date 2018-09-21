import React from 'react';
import axios from 'axios';
import style from './css/message.css';
import Good from 'assets/good.svg';
import Bad from 'assets/bad.svg';

class DetailComment extends React.Component {
    constructor(props) {
        super();
        this.state = {
            good: props.data.good,
            bad: props.data.bad,
            isStar: false,
            isBad: false,
        }
    }

    handleStar = () => {
        if(this.state.isBad) {
            let bad = +this.state.bad - 1;
            this.setState({
                isBad: false,
                bad: bad
            })
        }

        if(!this.state.isStar){
            let id = this.props.data.id;
            let good = +this.state.good + 1;
            this.setState({
                isStar: true,
            })
            axios.get('/goodbad?id='+id+'&gb=g').then((e)=>{
                this.setState({
                    good: e.data.good,
                })
            })
        }
        else {
            let good = +this.state.good - 1;
            this.setState({
                isStar: false,
                good: good
            })
        }
    }

    handleBad = () => {
        if(this.state.isStar) {
            let good = +this.state.good - 1;
            this.setState({
                isStar: false,
                good: good,
            })
        }

        if(!this.state.isBad){
            let id = this.props.data.id;
            this.setState({
                isBad: true,
            })
            axios.get('/goodbad?id='+id+'&gb=b').then((e)=>{
                this.setState({
                    bad: e.data.bad
                })
            })
        }
        else {
            let bad = +this.state.bad - 1;
            this.setState({
                isBad: false,
                bad: bad
            })
        }
    }

    render() {
        const data = this.props.data;
        return(
            <div className={style.commentWrapper}>
                <div className={style.commentLeft}>
                    <img src={data.headimgurl} alt=""/>
                </div>
                <div className={style.commentRight}>
                    <div className={style.commentAuthor}>{data.author}</div>
                    <div className={style.commentTime}>1分前</div>
                    <div className={style.commentContent}>{data.content}</div>
                    <div className={style.commentFooter}>
                        <div className={style.commentStar} onClick={this.handleStar}>
                            <Good fill={this.state.isStar ? '#1296db' : 'black'} width='20px' height='20px' />
                            <span>{this.state.good}</span>
                        </div>
                        <div className={style.commentStar} onClick={this.handleBad}>
                            <Bad fill={this.state.isBad ? '#1296db' : 'black'} width='20px' height='20px'/>
                            <span>{this.state.bad}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailComment;