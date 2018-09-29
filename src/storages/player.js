let init= {
	num: 0, 
	trackList: []
};

let player= (store= init, action) => {
	switch(action.type){
		case('INIT_TRACK_LIST'): {
			store= {
				num: 0,
				trackList: action.data,
				url: location.pathname
			};
			return store;
		}
		
		case('PLAY_TRACK_LIST'): {
			store= {
				trackList: action.trackList,
				num: action.num,
				url: action.url
			}

			return store;
		}

		case('PLAY_PLAYER'): {
			let trackList= action.trackList.map( (e, i) => {
				e.play= i == action.num && e.play != true ? true : false;
				return e;
			});
			store= {
				trackList: trackList,
				num: action.num,
				url: action.url
			}

			return store;
		}

		default:
			return store;
	}
}

export default player;