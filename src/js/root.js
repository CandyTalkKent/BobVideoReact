import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import "video-react/dist/video-react.css";
import PCIndex from './components/pc_index';
import PCVideoDetails from './components/pc_video_details';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component{


  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
            <Router history={hashHistory}>
              <Route path="/" component={PCIndex}></Route>
              <Route path="/details/:name" component={PCVideoDetails}></Route>
            </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>

        </MediaQuery>
        </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('myAppContainer'));
