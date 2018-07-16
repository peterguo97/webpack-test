import React from 'react';
import style from './css/detail.css';
import DetailButton from './confirm';
const data = [
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
]

const colorlist = ['rgb(253,255,223)','rgb(217,179,230)','rgb(208,233,255)','rgb(129,146,214)'];

class Waiting extends React.Component {
    render(){
        const list = data.map( (item, index)=> {
            let indexcolor = index % colorlist.length;
            return(
                <div className={style.listWrap} style={{background: colorlist[indexcolor]}} key={index}>
                    <div className={style.listLeft}>
                        <div className={style.listItemTitle}>设备:{item.name}</div>
                        <div className={style.listItem}>编号:{item.id}</div>
                        <div className={style.listItem}>{item.description}</div>
                    </div>
                    <div className={style.listRight}>
                        <DetailButton />
                    </div>
                </div>
            )
        })
        return(
            <div className={style.boxlist}>
                {list}
            </div>
        )
    }
}

export default Waiting;