import React from 'react';
import style from './css/detail.css';

class ShowMessage extends React.Component {
    render() {
        return (
            <div className={style.showmessage}>
                <div className={style.showmessageleft}>{this.props.left}</div>
                <div className={style.showmessageright}>{this.props.right}</div>
            </div>
        );
    }
}

export default ShowMessage;
