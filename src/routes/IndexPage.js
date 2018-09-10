import React from 'react';
import { NavBar } from 'antd-mobile';
import style from './css/common.css';
import IndexFooter from '../components/myFooter';

class IndexPage extends React.Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <div className={style.mainBox}>
        <div className={style.top}>
          <NavBar mode="dark">
            教学实践平台
          </NavBar>
        </div>
        <div className={style.middle}>
          {this.props.children}
        </div>
        <div className={style.footer}>
          <IndexFooter path={path} />
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
