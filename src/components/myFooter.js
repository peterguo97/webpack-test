import React from 'react';
import { Link } from 'react-router-dom';
import Home from 'assets/home.svg';
import Talking from '../assets/talking.svg';
import Search from '../assets/search.svg';
import Me from '../assets/me.svg';
import style from './css/detail.css';

class IndexFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footer0: '',
            footer1: '',
            footer2: '',
            footer3: '',
            defaultvalue: props.defaultvalue || 0,
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
        console.log(1);
        let key = 'footer' + this.state.defaultvalue;
        this.setState({
            [key]: '#108ee9'
        })
    }
    
    render() {
        return (
            <div className={style.IndexFooter}>
                <div className={style.footer}>
                    <Link to="/app/home">
                        <Home onClick={()=>{this.handleClick('footer0',0)}} fill={this.state.footer0} width="26px" height="26px" />
                        <div className={style.footerFont}>首页</div>
                    </Link>
                </div>
                <div className={style.footer}>
                    <Link to="/app/forum">
                        <Talking onClick={()=>{this.handleClick('footer1',1)}} fill={this.state.footer1} width="26px" height="26px" />
                        <div className={style.footerFont}>论坛</div>
                    </Link>
                </div>

                <div className={style.footer}>
                    <Link to="/app/search">
                        <Search onClick={()=>{this.handleClick('footer2',2)}} fill={this.state.footer2} width="26px" height="26px" />
                        <div className={style.footerFont}>搜索</div>
                    </Link>
                </div>

                <div className={style.footer}>
                    <Link to="/app/me">
                        <Me onClick={()=>{this.handleClick('footer3',3)}} fill={this.state.footer3} width="26px" height="26px" />
                        <div className={style.footerFont}>我</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default IndexFooter;
