import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import ShowMessage from '../../components/showMessage';
import go from '../../assets/go.png';
import RightContent from '../../components/rightContent';

const data = {
    name: 'Bob',
    sex: '1',
    gender: '通信1603',
    sid: '288727637236',
};
class ChangeMessage extends React.Component {
  back = () => {
    this.props.history.push('/me');
  }

  render() {
    return (
      <div>
        <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={this.back}> 个人信息 </NavBar>
        <Link to={`/changevalue/name/${data.name}`}>
          <ShowMessage
            left="姓名"
            right={
              <RightContent data={data.name} icon={<Icon type="right" />} />
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
        <Link to={`/changevalue/gender/${data.gender}`}>
        <ShowMessage
          left="班级"
          right={
         <RightContent data={data.gender} icon={<Icon type="right" />} />
        }
        />
        </Link>
        <Link to={`/changevalue/sid/${data.sid}`}>
        <ShowMessage
          left="学号"
          right={
        <RightContent data={data.sid} icon={<Icon type="right" />} />
        }
        />
        </Link>
      </div>
    );
  }
}

export default ChangeMessage;
