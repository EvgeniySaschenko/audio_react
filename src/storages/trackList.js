let init= [];

let trackList= (store= init, action) =>{
	switch(action.type){

		case('INIT_TRACK_LIST'): {
			return action.data;
		}

		case('NEW_PAGE_TRACK_LIST'): {
			return action.data;
		}
		
		case('PLAY_TRACK_LIST'): {

			store= action.trackList.map( (e, i) => {
				e.play= i == action.num && e.play != true ? true : false;
				return e;
			});

			return store;
		}

		default:
			return store;
	}
}

export default trackList;