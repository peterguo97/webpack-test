import React from 'react';
import {
SearchBar, Toast
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
      </div>
    );
  }
}

export default Search;
