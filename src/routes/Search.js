import IndexPage from './IndexPage';
import Search from '../components/search/mySearch';
import React from 'react'

class MySearch extends React.Component {
    render(){
        return(
            <IndexPage>
                <Search />
            </IndexPage>
        )
    }
}

export default MySearch;