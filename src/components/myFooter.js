import React from 'react';
import { Link } from 'react-router-dom';
import home from 'assets/home.png';
import home1 from 'assets/home1.png';
import talking from 'assets/talking.png';
import talking1 from '../assets/talking1.png';
import search from '../assets/search.png';
import search1 from '../assets/search1.png';
import me from '../assets/me.png';
import me1 from '../assets/me1.png';
import style from './css/detail.css';

const tabs = [
    {
        src: [home, home1], sub: '1', title: 'talking', to: '/home',
        },
    {
    src: [talking, talking1], sub: '2', title: 'talking', to: '/',
    },
        {
    src: [search, search1], sub: '3', title: 'search', to: '/search',
    },
        {
    src: [me, me1], sub: '4', title: 'me', to: '/me',
    },
  ];

class IndexFooter extends React.Component {
    render() {
        const path = this.props.path;
        const list = tabs.map((tab, index) => (
            <div className={path === tab.to ? style.focusFooter : style.footer} key={index}>
                <Link to={tab.to}>
                    <img src={path === tab.to ? tab.src[1] : tab.src[0]} alt={tab.title} />
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
