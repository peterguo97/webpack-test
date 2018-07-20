import React from 'react';
import { List, InputItem, NavBar } from 'antd-mobile';
class MobileEditor extends React.Component {
    render() {
        return(
            <div>
                <List>
                    <NavBar mode="dark">发ge帖</NavBar>
                    <InputItem type="text" placeholder="请输入标题">标题</InputItem>
                </List>
            </div>
        )
    }
}

export default MobileEditor;