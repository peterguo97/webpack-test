import React from 'react'
import IndexPage from './IndexPage';
import Notice from 'components/Notice';

class MyMessage extends React.Component {
    render(){
        return(
            <IndexPage>
                <Notice />
            </IndexPage>
        )
    }
}

export default MyMessage;