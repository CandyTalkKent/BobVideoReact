import React from 'react';
import { Row, Col,Menu } from 'antd';
import { Tabs, Icon,Radio,Button } from 'antd';
import {Link,Router,Route} from 'react-router';
import PCVideoContainer from './pc_videocontainer';
export default class PCHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      movies:'',
      current : "actionMovie",
      hasLogined:false
    };
  };

handleSizeChange(){

};
callback(){

};

handleClick(e){
  this.setState({current:e.key});
}
  render(){
    const TabPane = Tabs.TabPane;
    const styleHeadButton = {
      marginTop : "5px"
    }


    const userShow = this.state.hasLogined?
      <Button type="dashed" style={styleHeadButton} >用户中心</Button>
    :
      <Button type="primary"  style={styleHeadButton} >登录|注册</Button>
    ;

    return(
      <div>
          <Row>
            <Col span={2} class = "logo">
                  <a href="/" class="logo">
                      <span>博影</span>
                 </a>
            </Col>
            <Col span={20} class = "pc_header">
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} >
                  <TabPane tab="首页" key="1">
                    <PCVideoContainer />
                  </TabPane>
                  <TabPane tab="动作片" key="2">Content of Tab Pane 2</TabPane>
                  <TabPane tab="爱情片" key="3">Content of Tab Pane 3</TabPane>
                  <TabPane tab="搞笑片" key="4">Content of Tab Pane 4</TabPane>
                  <TabPane tab="综艺片" key="5">Content of Tab Pane 5</TabPane>
                  <TabPane tab="娱乐片" key="6">Content of Tab Pane 6</TabPane>
                </Tabs>
            </Col>
            <Col span={2}>
                {userShow}
            </Col>
          </Row>
      </div>
    );
  };
}
