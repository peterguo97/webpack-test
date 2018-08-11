import React from 'react';
import { Card, WingBlank, WhiteSpace, Icon } from 'antd-mobile';
import message from 'assets/message.png';

class Notice extends React.Component {
    render(){
        return(
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title="消息通知"
                        thumb={<img style={{width: '25px'}} src={message} alt="通知" />}
                    />
                    <Card.Body>
                        <div>This is content of `Card`</div>
                    </Card.Body>
                    <Card.Footer content="查看详情" extra={<div><Icon type="right" /></div>} />
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
        )
    }
}

export default Notice;