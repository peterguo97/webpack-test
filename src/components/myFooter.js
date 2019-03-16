import React from 'react';
import { Link } from 'react-router-dom';
import Home from 'assets/home.svg';
import Talking from '../assets/talking.svg';
import Search from '../assets/search.svg';
import Me from '../assets/me.svg';
import Plus from '../assets/plus.png';
import style from './css/detail.css';

class IndexFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footer0: '',
            footer1: '',
            footer2: '',
            footer3: '',
            defaultvalue: props.pageIndex || 0,
        }
    }
    handleClick = (key,index) => {
        let key1 = 'footer' + this.state.defaultvalue;
        this.setState({
            [key1]: '',
            [key]: '#108ee9',
            defaultvalue: index,
        })
    }

    componentDidMount = () => {
        let key = 'footer' + this.state.defaultvalue;
        // if(window.sessionStorage) {
        //     if(window.sessionStorage.getItem('pageIndex')) {
        //         let pageIndex = window.sessionStorage.getItem('pageIndex');
        //         key = 'footer' + pageIndex;
        //         this.setState({
        //             defaultvalue: pageIndex
        //         })
        //     }
        // }
       
        this.setState({
            [key]: '#108ee9'
        })
    }

    componentWillUnmount = () => {
        if(window.sessionStorage) {
            window.sessionStorage.setItem('pageIndex', this.state.defaultvalue);
        }
    }
    
    render() {
        return (
            <div className={style.IndexFooter}>
                <div className={style.footer}>
                    <Link to="/app/0/home">
                        <Home onClick={()=>{this.handleClick('footer0',0)}} fill={this.state.footer0} width="26px" height="26px" />
                        <div className={style.footerFont} style={{color: this.state.footer0 }}>首页</div>
                    </Link>
                </div>
                <div className={style.footer}>
                    <Link to="/app/1/forum">
                        <Talking onClick={()=>{this.handleClick('footer1',1)}} fill={this.state.footer1} width="26px" height="26px" />
                        <div className={style.footerFont} style={{color: this.state.footer1 }}>论坛</div>
                    </Link>
                </div>

                <div className={style.footer}>
                    <Link to="/plus">
                        <img src={Plus} width="26px" height="26px" style={{padding: '4px' }} />
                    </Link>
                </div>

                <div className={style.footer}>
                    <Link to="/app/2/search">
                        <Search onClick={()=>{this.handleClick('footer2',2)}} fill={this.state.footer2} width="26px" height="26px" />
                        <div className={style.footerFont} style={{color: this.state.footer2 }}>搜索</div>
                    </Link>
                </div>

                <div className={style.footer}>
                    <Link to="/app/3/me">
                        <Me onClick={()=>{this.handleClick('footer3',3)}} fill={this.state.footer3} width="26px" height="26px" />
                        <div className={style.footerFont} style={{color: this.state.footer3 }}>我</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default IndexFooter;
