import React from 'react';
import { Link } from 'react-router-dom';
import common from '../css/detail.css';
import Talking from './talking';
import test from '../../assets/girl.jpg';
import axios from 'axios';

const data = [{
    img: test,
    title: 'just a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust ajust a testjust a test testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a test',
    comment: 100,
    id: 0,
    },
    {
    img: test,
    title: 'just a test',
    comment: 100,
    id: 1,
    },
    {
    img: test,
    title: 'just a test',
    comment: 100,
    id: 2,
    },
    {
        img: test,
        title: 'just a test',
        comment: 100,
        id: 3,
    },
]

class Forum extends React.Component {
    componentDidMount() {
        axios.get('/dc/index/index/limit/10').then((message) => {
            console.log(message)
        }).catch((e)=>{
            console.log(e);
        })
    }
    render(){
        return(
            <div className={common.wrapper}>
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <Link to={`/detail/${item.id}`}>
                                    <Talking data={item} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Forum;