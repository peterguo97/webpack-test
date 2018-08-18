import React from 'react';
import axios from 'axios';
import { List, InputItem, NavBar, ImagePicker, WingBlank, Button, Icon, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
import style from './css/common.css';

class MobileEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            files: [],
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
        let result = this.checkNull();
        if(! result) {
            return;
        }
        axios.post('/topicsadd',this.state).then((message)=>{
            if (message.status === 200 ){
                Toast.success('发帖成功', 1);
            }
        }).catch((e)=>{
            Toast.fail('发帖失败',1);
        })
    }

    checkNull = () => {
        for (let key in this.state) {
            switch (key) {
                case 'title':
                    if (this.state[key] === '') {
                        Toast.fail('请添加帖子标题', 1);
                        return false;
                    }
                    break;

                case 'content':
                    if (this.state[key] === '') {
                        Toast.fail('请添加描述', 1);
                        return false;
                    }
                    break;

                case 'files':
                    if (this.state[key].length === 0) {
                        Toast.fail('请添加设备图片', 1);
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }
        return true;
    }

    render() {
        let files = this.state.files;
        return(
            <div>
                <List>
                    <NavBar mode="dark" leftContent={<Link to='/'><Icon style={{color: '#fff'}} type="left"/></Link>}>说点什么</NavBar>
                    <InputItem value={this.state.title} onChange={this.changeTitle} type="text" placeholder="请输入标题">标题</InputItem>
                    <div className={style.title}>请输入内容</div>
                    <textarea className={style.listContent} name="" id="" cols="30" rows="10" onChange={this.changeContent} value={this.state.content}></textarea>
                    <WingBlank>
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
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