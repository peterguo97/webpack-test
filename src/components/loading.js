import React from 'react';
import loading from 'assets/loading.gif';
import style from './css/detail.css';

class Loading extends React.Component {
    render() {
        return (
            <div className={style.loader} style={{ display: this.props.show ? 'block' : 'none' }}>
                <div className={style.loaderContent}>
                    <img src={loading} alt="loading" />
                </div>
            </div>
        );
    }
}

export default Loading;
