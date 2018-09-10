import React from 'react';
import Notice from 'components/Notice';
import IndexPage from './IndexPage';

class MyMessage extends React.Component {
    render() {
        return (
            <IndexPage {...this.props}>
                <Notice />
            </IndexPage>
        );
    }
}

export default MyMessage;
