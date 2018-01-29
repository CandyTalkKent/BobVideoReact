import React from 'react';
import PCVideoBlock from './pc_video_block';
import PCVideoImageBlock from './pc_videoimage_block';
import { Row, Col,Carousel ,Divider } from 'antd';
export default class PCVideoContainer extends React.Component{

  render(){
    const settings = {
      autoplay:true,
      dots:true,
      speed:500,
      vertical : false
    };


    return(
        <div>
            <Row gutter={16}>
                <Col  span={12}>
                      <Carousel {...settings}>
                        <div><img src="./src/images/carousel_1.jpg"/></div>
                        <div><img src="./src/images/carousel_2.jpg"/></div>
                        <div><img src="./src/images/carousel_3.jpg"/></div>
                        <div><img src="./src/images/carousel_4.jpg"/></div>
                      </Carousel>
                </Col>
                <Col  span={6}>
                    <PCVideoBlock title="好莱坞大片" offset={0} count={9}/>
                </Col>
                <Col span={6}>
                    <PCVideoBlock title="欧美院线" offset={0} count={9}/>
                </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
                <Col  span={6}>
                    <PCVideoBlock title="今日最佳" offset={0} count={10}/>
                </Col>
                <Col  span={6}>
                    <PCVideoBlock title="影院在线" offset={0} count={10}/>
                </Col>
                <Col  span={6}>
                    <PCVideoBlock title="好莱坞大片" offset={0} count={10}/>
                </Col>
                <Col span={6}>
                    <PCVideoBlock title="经典怀念" offset={0} count={10}/>
                </Col>
            </Row>
            <Divider>精彩大片预览</Divider>
            <Row  gutter={10}>
                <Col  span={8}>
                    <PCVideoImageBlock offset={0} count={9} imageWidth="90px" cardTitle="Top250一览"/>
                </Col>
                <Col  span={8}>
                    <PCVideoImageBlock offset={0} count={9} imageWidth="90px" cardTitle="Top250一览"/>
                </Col>
                <Col  span={8}>
                    <PCVideoImageBlock offset={0} count={9} imageWidth="90px" cardTitle="Top250一览"/>
                </Col>
            </Row>
        </div>
    );
  };


}
