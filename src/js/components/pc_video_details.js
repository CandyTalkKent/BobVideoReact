import React from 'react';
import { Player } from 'video-react';
export default class PCVideoDetails extends React.Component{

    render(){
      console.log(this.props.params.name);
      const url = "http://localhost/videoDownloads/" + this.props.params.name;
      return(
        <div>
          <Player>
            <source src= {url}/>
          </Player>
        </div>
      );
    };
}
