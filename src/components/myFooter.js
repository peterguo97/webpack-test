import React from 'react';
import { Link } from 'react-router-dom';
import Home from 'assets/home.svg';
import Talking from '../assets/talking.svg';
import Search from '../assets/search.svg';
import Me from '../assets/me.svg';
import style from './css/detail.css';

class IndexFooter extends React.Component {
    render() {
        const path = this.props.path;
        return (
            <div className={style.IndexFooter}>
                <div className={style.footer}>
                    <Link to="/home">
                        <Home fill={path === '/home' ? '#108ee9' : ''} width="26px" height="26px" />
                    </Link>
                </div>
                <div className={style.footer}>
                    <Link to="/">
                        <Talking fill={path === '/' ? '#108ee9' : ''} width="26px" height="26px" />
                    </Link>
                </div>

                <div className={style.footer}>
                    <Link to="/search">
                        <Search fill={path === '/search' ? '#108ee9' : ''} width="26px" height="26px" />
                    </Link>
                </div>


                <div className={style.footer}>
                    <Link to="/me">
                        <Me fill={path === '/me' ? '#108ee9' : ''} width="26px" height="26px" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default IndexFooter;
