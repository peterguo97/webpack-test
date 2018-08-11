import React from 'react';
import { Link } from 'react-router-dom';
import style from './css/message.css';

class MyLabel extends React.Component {
    render() {
        const data = this.props.data;
        return(
            <div className={style.mylabel}>
                <Link to={data.url}>
                    <div>{data.text}</div>
                </Link>
            </div>
        )
    }
}

export default MyLabel;