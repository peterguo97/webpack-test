import React from 'react';
import { Link } from 'react-router-dom';
import MessageDetail from '../../components/MessageDetail';
import girl from '../../assets/girl.jpg';
import go from '../../assets/go.png';
import IndexPage from '../IndexPage';

const data = {
    title: '通信1111XXXX',
    img: girl,
    description: '通信1603',
};

class Person extends React.Component {
    render() {
        return (
            <IndexPage>
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
                </div>
            </IndexPage>
        );
    }
}

export default Person;
