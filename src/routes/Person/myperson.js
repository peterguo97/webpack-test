import React from 'react';
import { Link } from 'react-router-dom';
import { WingBlank, WhiteSpace, List } from 'antd-mobile';
import MessageDetail from 'components/MessageDetail';
import girl from 'assets/girl.jpg';
import go from 'assets/go.png';
import IndexPage from '../IndexPage';

const data = {
    title: '通信1111XXXX',
    img: girl,
    description: '通信1603',
};

const Item = List.Item;

class Person extends React.Component {
    render() {
        return (
            <IndexPage {...this.props}>
                <div style={{ width: '100%' }}>
                    <Link to="/change">
                        <MessageDetail
                          data={data}
                          rightContent={(
                            <div style={{ padding: '15px' }}>
                                <img src={go} width="40px" alt="修改信息" />
                            </div>
                            )}
                        />
                    </Link>
                    <List renderHeader={() => '设备管理'}>
                        <Link to="/uploadDevice">
                            <Item arrow="horizontal">上传设备</Item>
                        </Link>
                        <Link to="/myDevice">
                            <Item arrow="horizontal">我的设备</Item>
                        </Link>
                        <Link to="/borrowDevice">
                            <Item arrow="horizontal">借用设备</Item>
                        </Link>
                    </List>
                </div>
            </IndexPage>
        );
    }
}

export default Person;
