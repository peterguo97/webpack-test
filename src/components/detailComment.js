import React from 'react';
import style from './css/message.css';
import girl from 'assets/girl.jpg';
import good from 'assets/good.png';
import good1 from 'assets/good1.png';
import bad from 'assets/bad.png';
import bad1 from 'assets/bad1.png';

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
            let bad = this.state.bad - 1;
            this.setState({
                isBad: false,
                bad: bad,
            })
        }

        if(!this.state.isStar){
            let good = this.state.good + 1;
            this.setState({
                isStar: true,
                good: good
            })
        }
        else {
            let good = this.state.good - 1;
            this.setState({
                isStar: false,
                good: good
            })
        }
    }

    handleBad = () => {
        if(this.state.isStar) {
            let good = this.state.good - 1;
            this.setState({
                isStar: false,
                good: good,
            })
        }

        if(!this.state.isBad){
            let bad = this.state.bad + 1;
            this.setState({
                isBad: true,
                bad: bad
            })
        }
        else {
            let bad = this.state.bad - 1;
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
                    <img src={data.userImg} alt=""/>
                </div>
                <div className={style.commentRight}>
                    <div className={style.commentAuthor}>{data.author}</div>
                    <div className={style.commentTime}>1分前</div>
                    <div className={style.commentContent}>{data.content}</div>
                    <div className={style.commentFooter}>
                        <div className={style.commentStar} onClick={this.handleStar}>
                            <img src={this.state.isStar ? good1 : good } alt="zan"/>
                            <span>{this.state.good}</span>
                        </div>
                        <div className={style.commentStar} onClick={this.handleBad}>
                            <img src={this.state.isBad ? bad1 : bad } alt="cai"/>
                            <span>{this.state.bad}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailComment;