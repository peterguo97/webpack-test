import React from 'react';
import Search from 'components/search/mySearch';
import MyLabel from 'components/MyLabel';
import IndexPage from './IndexPage';
import style from './css/common.css';

const data = [];

class MySearch extends React.Component {
    render() {
        return (
            <div>
                <Search {...this.props} />
                <div className={style.labelwrap}>
                    {
                        data.map((item, index) => (
                                <MyLabel key={index} data={item} />
                            ))
                    }
                </div>
            </div>
        );
    }
}

export default MySearch;
