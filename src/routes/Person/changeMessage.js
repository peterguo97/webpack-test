import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import ShowMessage from 'components/showMessage';
import go from 'assets/go.png';
import RightContent from 'components/rightContent';

const data = {
    relname: 'Bob',
    sex: '1',
    class: '通信1603',
    stuid: '288727637236',
};

class ChangeMessage extends React.Component {
  state = {
    relname: '',
    sex:'',
    class: '',
    stuid: '',
    mobile: '',
  }
  back = () => {
    this.props.history.push('/me');
  }

  componentDidMount = () => {
      let storage = window.localStorage;
      Object.keys(this.state).forEach((item,index)=>{
        if(storage.getItem(item)) {
          this.setState({
            [item]: storage.getItem(item)
          })
        }
      })
  }
  
  
  render() {
    let data = this.state;
    return (
      <div>
        <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={this.back}> 个人信息 </NavBar>
        <Link to={`/changevalue/relname/${data.relname}`}>
          <ShowMessage
            left="姓名"
            right={
              <RightContent data={data.relname} icon={<Icon type="right" />} />
          }
          />
        </Link>
        <Link to={`/changevalue/sex/${data.sex}`}>
        <ShowMessage
          left="性别"
          right={
        <RightContent data={data.sex} icon={<Icon type="right" />} />
        }
        />
        </Link>
        <Link to={`/changevalue/class/${data.class}`}>
        <ShowMessage
          left="班级"
          right={
         <RightContent data={data.class} icon={<Icon type="right" />} />
        }
        />
        </Link>
        <Link to={`/changevalue/stuid/${data.stuid}`}>
        <ShowMessage
          left="学号"
          right={
        <RightContent data={data.stuid} icon={<Icon type="right" />} />
        }
        />
        </Link>
        <Link to={`/changevalue/mobile/${data.mobile}`}>
        <ShowMessage
          left="联系方式"
          right={
        <RightContent data={data.mobile} icon={<Icon type="right" />} />
        }
        />
        </Link>
      </div>
    );
  }
}

export default ChangeMessage;
