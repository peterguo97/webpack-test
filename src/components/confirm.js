import { Modal, WhiteSpace, Toast, Button } from 'antd-mobile';
import React from 'react';
import axios from 'axios';
import style from './css/detail.css';

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

export default class DetailButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      num: '',
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    axios.post('/book',{
      id: this.props.id,
    }).then((e)=> {
      this.setState({
        num: e.data.num,
        [key]: true,
      })
    })
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  handlePress = () => {
    axios.post('/book',{
      id: this.props.id,
      state: ( +this.state.num ) ? 1 : 0,
    }).then((e) => {
      if((+this.state.num)) {
        Toast.success('排队成功，你可以在我的预约处查看排队信息', 1);
      }
      else{
        Toast.success('预约成功，你可以在消息通知处查看详细信息', 1);
      }
      this.onClose('modal1')();
    })
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal('modal1').bind(this)}>预约</Button>
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="当前状态"
          footer={[
            { text: '取消', onPress: () => { console.log('cancel'); this.onClose('modal1')(); } },
            { text: '确认', onPress: this.handlePress },
          ]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 60 }}>
            {(+this.state.num) == 0 ? '设备空闲是否确定预约' : `当前排队${this.state.num}人`}
          </div>
        </Modal>
     </div>
    );
  }
}