import React from 'react';
import common from '../css/detail.css';
import Talking from './talking';
import test from '../../assets/girl.jpg';

const data = [{
    img: test,
    title: 'just a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust ajust a testjust a test testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a testjust a test',
    comment: 100
    },
    {
    img: test,
    title: 'just a test',
    comment: 100
    },
    {
    img: test,
    title: 'just a test',
    comment: 100
    },
    {
        img: test,
        title: 'just a test',
        comment: 100
    },
]
class Forum extends React.Component {
    render(){
        return(
            <div className={common.wrapper}>
                {
                    data.map((item,index)=>{
                        return(
                            <Talking key={index} data = {item} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Forum;