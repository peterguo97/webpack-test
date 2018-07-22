import React from 'react';
import { Link } from 'react-router-dom';
import talking from '../assets/talking.png';
import search from '../assets/search.png';
import plus from '../assets/plus.png';
import notice from '../assets/notice.png';
import me from '../assets/me.png';
import style from './css/detail.css';

const tabs = [
    {
    src: talking, sub: '1', title: 'talking', to: '/',
    },
        {
    src: search, sub: '2', title: 'search', to: '/search',
    },
        {
    src: plus, sub: '3', title: 'plus', to: '/plus',
    },
        {
    src: notice, sub: '4', title: 'notice', to: '/notice',
    },
        {
    src: me, sub: '5', title: 'me', to: '/me',
    },
  ];

class IndexFooter extends React.Component {
    render() {
        const list = tabs.map((tab, index) => (
            <div className={style.footer} key={index}>
                <Link to={tab.to}>
                    <img src={tab.src} alt={tab.title} />
                </Link>
            </div>
        ));
        return (
            <div className={style.IndexFooter}>
               {list}
            </div>
        );
    }
}

export default IndexFooter;
