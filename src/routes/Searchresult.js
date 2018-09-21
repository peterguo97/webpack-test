import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Waiting from 'components/waiting';
import style from './css/common.css';

class SearchResult extends React.Component {
    render() {
        return (
            <div className={style.mainBox}>
                <div className={style.top}>
                    <NavBar mode="dark" leftContent={<Link to="/app/search"><Icon style={{ color: '#fff' }} type="left" /></Link>}>搜索结果</NavBar>
                </div>
                <div className={style.middle}>
                    <Waiting {...this.props} />
                </div>
            </div>
        );
    }
}

export default SearchResult;
