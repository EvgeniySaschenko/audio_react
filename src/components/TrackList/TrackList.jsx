import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { locale } from 'moment';


class TrackList extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		let url= location.pathname;
		this.props.init( url );
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.location.pathname != this.props.location.pathname){
			let url= location.pathname;
			this.props.newPage( url );
		}
	}

	play(){
		let { trackList }= this.props.data;
		let url= location.pathname;
		let num= arguments[0];
		this.props.play(num, trackList, url);
	}


	firstTrack(){
		let num= arguments[0];
		this.props.firstTrack(num);
	}

	render(){
		let { trackList, nav, payer }= this.props.data;
		let urlItem = nav.filter( e => e.link == location.pathname );
		let num= 0;
		let templateTrack= trackList.map( (e, i ) => {
			return(
				<div className="TrackList__item" key={ i }>
					<div className="TrackList__col TrackList__col_1">
						<span className={ `TrackList__btn TrackList__btn_play ${ !e.play ? 'fi fi-play' : 'fi fi-pause' }` } onClick={ this.play.bind(this, i) } ></span>
						<a download="download" href={ window.srcData + `ctr/index.php?ctr=download&name=${ e.name }&artist=${ e.artist }&id=${ e.id }&action=DOWNLOAD` } className="TrackList__btn TrackList__btn_download fi fi-arrow-down"></a>

						<div className="TrackList__info">
							<div className="TrackList__artist"> { e.artist } </div>
							<div className="TrackList__name"> { e.name } </div>
						</div>
					</div>
					
					<div className="TrackList__col TrackList__col_2">
						<span className="TrackList__duration">
							{ e.duration }
						</span>
					</div>
				</div>
			)
		});


		return(
			<div className="TrackList">
				<h1 className="TrackList__title"> {urlItem[0] ? urlItem[0].name : 'Список треков' } </h1>
				{ templateTrack }
			</div>
		)
	}

}

export default connect(
	store => {
		return{
			data: store
		}
	},

	dispatch => {
		return{
			init: ( url )=>{
				axios.get(window.srcData + `ctr/index.php?ctr=track&link=${ url }&action=GET_TRACK_ALL`)
				.then( (res)=>{
					dispatch({
						type: 'INIT_TRACK_LIST',
						data: res.data,
						url: url
					})
				} )
				.catch( (err) => console.log( err) )
			},

			newPage: ( url )=>{
				axios.get(window.srcData + `ctr/index.php?ctr=track&link=${ url }&action=GET_TRACK_ALL`)
				.then( (res)=>{
					dispatch({
						type: 'NEW_PAGE_TRACK_LIST',
						data: res.data,
						url: url
					})
				} )
				.catch( (err) => console.log( err) )
			},

			play: ( num, trackList, url ) =>{
				dispatch({
					type: 'PLAY_TRACK_LIST',
					num: num,
					trackList: trackList,
					url: url
				})
			}

		}
	}
)(TrackList);