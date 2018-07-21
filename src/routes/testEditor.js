import React from 'react';
import { List, InputItem, NavBar, ImagePicker, WingBlank, Button } from 'antd-mobile';
import style from './css/common.css';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

class MobileEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            files: data
        }
    }

    changeTitle = (val) => {
        this.setState({
            title: val,
        })
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }

    changeContent = (e) => {
        this.setState({
            content: e.target.value,
        })
    }

    handleClick = () => {
        console.log('hello');
    }
    render() {
        let files = this.state.files;
        return(
            <div>
                <List>
                    <NavBar mode="dark">说点什么</NavBar>
                    <InputItem value={this.state.title} onChange={this.changeTitle} type="text" placeholder="请输入标题">标题</InputItem>
                    <div className={style.title}>请输入内容</div>
                    <textarea className={style.listContent} name="" id="" cols="30" rows="10" onChange={this.changeContent} value={this.state.content}></textarea>
                    <WingBlank>
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 5}
                            multiple={false}
                        />
                    </WingBlank>
                    <Button type="primary" onClick={this.handleClick}>发表</Button>
                </List>
            </div>
        )
    }
}

export default MobileEditor;