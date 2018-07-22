import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Notice extends React.Component {
    render(){
        return(
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <Card>
                    <Card.Header
                        title="This is title"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div>This is content of `Card`</div>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>
        )
    }
}

export default Notice;