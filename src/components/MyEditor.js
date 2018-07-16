import React from 'react';
import { NavBar } from 'antd-mobile';
import style from './css/editor.css';

class MyEditor extends React.Component {
    constructor(props){
        super();
        this.state = {
            content: props.content
        }
    }
    
    render(){
        return(
            <div className = {style.wrapper}>
                <NavBar mode = "dark">说点什么</NavBar>
                <div dangerouslySetInnerHTML={{__html: this.state.content }} />
                <div contenteditable="true" data-placeholder="请输入您的证件地址"></div>
            </div>
        )
    }
}

export default MyEditor;