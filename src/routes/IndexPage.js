import React from 'react';
import { NavBar } from 'antd-mobile';
import style from './css/common.css';
import IndexFooter from '../components/myFooter';

class IndexPage extends React.Component {
  render() {
    let path = this.props.location.pathname;
    let pageIndex = path.replace(/[^\d]/g, '');
    console.log(pageIndex);
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
          <IndexFooter pageIndex={pageIndex} />
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
