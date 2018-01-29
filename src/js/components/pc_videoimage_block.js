import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
export default class PCVideoImageBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			videos: ''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
    fetch("http://localhost:8082/selectVideoItems/"+this.props.offset+"/"+this.props.count,myFetchOptions).then(res=>res.json())
    .then(json=>this.setState({videos:json}));
	};
	render() {
		const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styeH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
		const {videos} = this.state;
		const videoList = videos.length
			? videos.map((videoItem, index) => (
				<div key={index} class="imageblock">
					<Link to={`details/${videoItem.name}`}  target="_blank">
						<div class="custom-image">
							<img alt="" style={styleImage} src="./src/images/carousel_1.jpg"/>
						</div>
						<div class="custom-card">
							<h3 style={styeH3}>{videoItem.name}</h3>
							<p>{videoItem.description}</p>
						</div>
					</Link>
				</div>
			))
			: '没有加载到任何电影';
		return (
			<div>
				<Card title={this.props.cardTitle} bordered={true} style={{
					width: this.props.width
				}}>
					{videoList}
				</Card>
			</div>
		);
	};
}
