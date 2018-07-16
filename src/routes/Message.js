import IndexPage from './IndexPage';
import Message from '../components/Message';
import React from 'react'

class MyMessage extends React.Component {
    render(){
        return(
            <IndexPage>
                <Message />
            </IndexPage>
        )
    }
}

export default MyMessage;