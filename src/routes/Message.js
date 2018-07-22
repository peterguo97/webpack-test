import IndexPage from './IndexPage';
import Notice from 'components/Notice';
import React from 'react'

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