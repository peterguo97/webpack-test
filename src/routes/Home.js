import React from 'react';
import { Carousel, WingBlank,WhiteSpace } from 'antd-mobile';
import style from './css/common.css';
import download from 'assets/download.png';
import search from 'assets/search.png';
import axios from 'axios';
class Home extends React.Component {
    state = {
        data: [],
        imgHeight: 176,
      }
      componentDidMount() {
        
        axios.get("/api/bannershow").then((mes)=>{
          console.log(mes.data)
          this.setState({
            data: mes.data
          })
        })
      }
      
      render() {
        return (
          <div>
            <WingBlank>
              <WhiteSpace />
              <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
              >
                {this.state.data.map(val => (
                  <img
                      src={val.url}
                      key={val.uid}
                      alt=""
                      style={{ width: '100%', verticalAlign: 'top' }}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                      }}
                    />
                ))}
              </Carousel>
              <WhiteSpace />
            </WingBlank>
            <div className={style.homeImgWrappper}>
              <div className={style.homeImgBox}>
                <img src={download} alt="资料下载" />
                <span>资料下载</span>
              </div> 
              <div className={style.homeImgBox}>
                <img src={search} alt="资料搜索" />
                <div>资料搜索</div>
              </div>
            </div>
          </div>
        );
      }
}

export default Home;

