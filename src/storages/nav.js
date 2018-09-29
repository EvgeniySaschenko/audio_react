let init= [];

let nav= (store= init, action) =>{
	switch(action.type){

		case('INIT_NAV'): {
			store= action.data.map( (e) =>{
				e.status= action.url != e.link ? false : true;
				return e;
			})
			return store;
		}

		case('ACTIVE_ITEM_NAV'): {
			store= store.map( (e) =>{
				e.status= action.id != e.id ? false : true;
				return e;
			})
			return store;
		}

		case('ALL_TRACK_LIST'): {
			store= store.map( (e) =>{
				e.status= action.url != e.link ? false : true;
				return e;
			})
			return store;
		}

		default:
			return store;
	}
}

export default nav;