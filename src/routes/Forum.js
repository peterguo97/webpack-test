import React from 'react';
import IndexPage from './IndexPage';
import Forum from '../components/talk/Forum';

class MyForum extends React.Component {
    render() {
        return (
            <IndexPage>
                <Forum />
            </IndexPage>
        );
    }
}

export default MyForum;
