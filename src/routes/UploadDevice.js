import React from 'react';
import { List, InputItem, NavBar, ImagePicker, WingBlank, Button, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import style from './css/common.css';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

class UploadDevice extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            num: '',
            files: data
        }
    }

    changeTitle = (val) => {
        this.setState({
            title: val,
        })
    }

    changeNum = (val) => {
        this.setState({
            num: val,
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
        return (
            <div>
                <List>
                    <NavBar mode="dark" leftContent={<Link to='/me'><Icon style={{ color: '#fff' }} type="left" /></Link>}>上传设备</NavBar>
                    <InputItem value={this.state.title} onChange={this.changeTitle} type="text" placeholder="请输入设备名称">设备名称:</InputItem>
                    <InputItem value={this.state.num} onChange={this.changeNum} type="text" placeholder="请输入设备型号">设备型号:</InputItem>
                    <div className={style.title}>请输入设备描述</div>
                    <textarea className={style.listContent} name="" cols="30" rows="10" onChange={this.changeContent} value={this.state.content}></textarea>
                    <WingBlank>
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 5}
                            multiple={false}
                        />
                    </WingBlank>
                    <Button type="primary" onClick={this.handleClick}>上传</Button>
                </List>
            </div>
        )
    }
}

export default UploadDevice;