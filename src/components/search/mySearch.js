import React from 'react';
import {
SearchBar, Toast, Menu, ActivityIndicator, NavBar
} from 'antd-mobile';
import common from '../css/detail.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  onChange = (value)=> {
    this.setState({ value });
  }

  clear = ()=> {
    this.setState({ value: '' });
  }

  handleSubmit = () => {
    if(! this.state.value ) {
      Toast.info('请输入搜索内容', 1);
      return;
    }
    this.props.history.push('/searchresult/' + this.state.value);
  }

  handleClick() {
    this.manualFocusInst.focus();
  }

  render() {
    return (
      <div className={common.wrapper}>
        <SearchBar
          value={this.state.value}
          onChange={this.onChange}
          onSubmit={this.handleSubmit}
          placeholder="请输入搜索的设备名称"
          maxLength={20}
        />
        <MenuExample />
      </div>
    );
  }
}

export default Search;

/* eslint global-require:0, no-nested-ternary:0 */

const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

class MenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    this.setState({
      show: !this.state.show
    })
    console.log(label);
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"
          >
            搜索分类
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}


