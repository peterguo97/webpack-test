import React from 'react';
import Search from 'components/search/mySearch';
import MyLabel from 'components/MyLabel';
import IndexPage from './IndexPage';
import style from './css/common.css';

const data = [
    { text: '单片机', url: '/search/1' },
    { text: '实验板', url: '/search/1' },
    { text: '单片机', url: '/search/1' },
    { text: '这是一个超级长的测试', url: '/search/1' },
    { text: 'LaLA', url: '/search/1' },
];

class MySearch extends React.Component {
    render() {
        return (
            <IndexPage {...this.props}>
                <Search />
                <div className={style.labelwrap}>
                    {
                        data.map((item, index) => (
                                <MyLabel key={index} data={item}/>
                            ))
                    }
                </div>
            </IndexPage>
        );
    }
}

export default MySearch;
