import React from 'react'
import style from './css/detail.css';

export default class RightContent extends React.Component {
    render(){
        return(
            <div className={style.rightmessage}>
                <span>{this.props.data}</span>
                <span>{this.props.icon}</span>
            </div>
        )
    }
}
