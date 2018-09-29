import React from 'react';
import { connect } from 'react-redux';
import _lib from '../../assets/js';

class Player extends React.Component{
	constructor(props){
		super(props);
		this.audio= new Audio();
	}

	componentDidUpdate(prevProps){
		let { player }= this.props.data;

		if(player.trackList.length > 0){
			let { id, play }= player.trackList[player.num];
			let { Player__info, Player__progress }= this.refs;

			let prevId= prevProps.data.player.trackList[prevProps.data.player.num] ? prevProps.data.player.trackList[prevProps.data.player.num].id : false;

			// Инициализация трека
			if( (prevId != id || this.audio.src == '') && play ){
				this.audio.load();
				this.audio.src= window.srcData + 'music/' + id + '.mp3';
				this.audio.type='audio/mpeg';
				let promise= this.audio.play();
				promise
					.then(function() {})
					.catch(function(error) {});

				// Прогресс
				this.audio.addEventListener('timeupdate', (e)=> {
					let progressFactor= Player__info.offsetWidth / this.audio.duration;
					Player__progress.style.width= progressFactor * this.audio.currentTime + 'px';
				})

				// Слушатель на окончание трека
				this.audio.addEventListener('ended', (e)=>{
					let nextTrack= player.num != player.trackList.length - 1 ? player.num + 1 : 0;
					this.props.play(nextTrack, player.trackList, player.url);
				})
			}else{
				// Воспроизвести / поставить на паузу
				play ? this.audio.play() : this.audio.pause();
			}
		}

	}

	play(){
		let { player }= this.props.data;
		let num= arguments[0] ? arguments[0] : 0;
		this.props.play(num, player.trackList, player.url);
	}


	regulatorAudioVolume(){
		// Регулятор громкости
		let { Player__volumeScale, Player__volumeToggle }= this.refs;
		_lib.regulatorAudio(Player__volumeScale, Player__volumeToggle, this.audio, 'volume');
	}

	regulatorAudioCurrentTime(){
		// Регулятор прокрутка трека
		let { Player__info, Player__progress }= this.refs;
		_lib.regulatorAudio(Player__info, Player__progress, this.audio, 'currentTime');
	}

	render(){
		let { player }= this.props.data;
		let play, name, artist, numPrev, numNext, num;

		if(player.trackList.length > 0){
			let trackList= player.trackList;
			num= player.num;
			play= trackList[num].play;
			name= trackList[num].name;
			artist= trackList[num].artist;
			numPrev= num ? num - 1 : trackList.length - 1;
			numNext= num + 1 < trackList.length ? num + 1 : 0;
		}

		return(
			<div className="Player">
				<span className="Player__prev fi fi-rewind" onClick={ this.play.bind(this, numPrev) }></span>	
				<span className={ `Player__toggle ${ play ? 'fi fi-pause' : 'fi fi-play' } `} onClick={ this.play.bind(this, num) }></span>
				<span className="Player__next fi fi-fast-forward" onClick={ this.play.bind(this, numNext) }></span>	
				<div ref="Player__info" className="Player__info" onMouseEnter={ this.regulatorAudioCurrentTime.bind(this) }>
					<div ref="Player__progress" className="Player__progress"></div>
					<span className="Player__current-position"></span>
					<div className="Player__box-info">
						<span className="Player__name">{ name }</span> - 
						<span className="Player__artist">{ artist }</span>
					</div>
					<span className="Player__duration"></span>
				</div>
				<div ref="Player__volumeScale" className="Player__volume-scale" onMouseEnter={ this.regulatorAudioVolume.bind(this) } >
					<div ref="Player__volumeToggle" className="Player__volume-toggle">
					</div>
				</div>
				<i className="Player__volume-icon fi fi-volume"></i>
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
			play: ( num, trackList, url ) =>{
				dispatch({
					type: 'PLAY_PLAYER',
					num: num,
					trackList: trackList,
					url: url
				})
			}
		}
	}
)(Player);