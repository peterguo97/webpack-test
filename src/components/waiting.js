import React from 'react';
import axios from 'axios';
import { List, Modal } from 'antd-mobile';
import style from './css/detail.css';
import DetailButton from './confirm';

const colorlist = ['rgb(253,255,223)','rgb(217,179,230)','rgb(208,233,255)','rgb(129,146,214)'];
const Item = List.Item;

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

// const data1 = {
//     name: 'Just for test',
//     detail: 'Just for testJust for testJust for testJust for testJust for testJust for test',
// }
class Waiting extends React.Component {
    state = {
        data: [],
        modal1: false,
        showmessage: {}
    }

    hanldeClick = (e,index) => {
        let item = this.state.data[index];
        this.setState({
            modal1: true,
            showmessage: item
        })
    }

    onClose = key => () => {
        this.setState({
          [key]: false,
        });
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

    componentDidMount = () => {
        // axios.get('/api/test').then((e) => {
        //     this.setState({
        //         data: e.data,
        //     })
        // })
        axios.get(`/search/?search=${this.props.match.params.search}`).then( (e)=> {
            this.setState({
                data: e.data,
            })
        })
    }
    
    render() {
        let data = this.state.data;
        let data1 = this.state.showmessage;
        const list = data.map( (item, index)=> {
            return(
                <Item key={index} thumb={item.img1} extra={<DetailButton {...item}/>}>
                    <div loc={index} className={style.searchItem} onClick={( e )=>{this.hanldeClick(e,index)}}>{item.name}</div>
                </Item>
            )
        })

        return(
            <div className={style.boxlist}>
                {list}
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={true}
                    onClose={this.onClose('modal1')}
                    title={data1.name}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    >
                    <div style={{ overflow: 'hidden', borderTop: '1px solid black', paddingTop: '8px'
                    }}>
                        {data1.detail}
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Waiting;