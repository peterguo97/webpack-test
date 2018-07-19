import React from 'react';
import {
SearchBar,
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

  handleClick() {
    this.manualFocusInst.focus();
  }

  render() {
    return (
      <div className={common.wrapper}>
        <SearchBar
          value={this.state.value}
          onChange={this.onChange}
          placeholder="lalallalal"
          maxLength={20}
        />
      </div>
    );
  }
}

export default Search;
