import React from 'react';
import classNames from 'classnames/bind';
import style from './css/connect.css';

const cx = classNames.bind(style);

export default class ConnectWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            down: false,
        }
    }

    handleClick = () => {
        let temp = this.state.down;
        setTimeout(() => {
            this.setState({
                down: !temp,
            })
        }, 100);
    }

    render() {
        let down = this.state.down;
        const direction = cx({
            right: !down,
            down: down,
        });
        return (
            <div className={style.connectWrap}>
                <div className={style.Title} onClick={this.handleClick}>
                    <div className={direction} />
                    <div style={{ marginLeft: '10px' }}>
                        {this.props.title}
                    </div>
                </div>
                <div className={style.userWrap} style={{display: down ? 'block' : 'none'}}>
                    {this.props.children}           
                </div>
            </div>
        );
    }
}
