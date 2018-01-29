import React from 'react';

import {Card,List} from 'antd';

import {Link,Router,Route} from 'react-router';
export default class PCVideoBlock extends React.Component{


  constructor(){
    super();
    this.state = {
      videos:''
    };
  }

  componentDidMount(){
    var myFetchOptions = {
      method:'GET',
    };
    fetch("http://localhost:8082/selectVideoItems/"+this.props.offset+"/"+this.props.count,myFetchOptions).then(res=>res.json())
    .then(json=>this.setState({videos:json}));
  };

  render(){
    const {videos} = this.state;
    const styeH3 = {
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
    const videoList = videos.length?
     videos.map((videoItem,index)=>(
       <li key={index} style={styeH3}>
           <Link to={`details/${videoItem.name}`} target="_blank">
             {videoItem.name}
           </Link>
        </li>
     ))
    :
    '没有加载到影片'
    ;

    return(
      <Card title = {this.props.title}>
            <ul>
              {videoList}
           </ul>
      </Card>
    );
  };

}
