import React from 'react';
import IndexPage from './IndexPage';
import Forum from '../components/talk/Forum';

class MyForum extends React.Component {
    render() {
        return (
            <IndexPage {...this.props}>
                <Forum />
            </IndexPage>
        );
    }
}

export default MyForum;
