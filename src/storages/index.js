import { createStore, combineReducers } from 'redux';

import trackList from './trackList.js';
import nav from './nav.js';
import player from './player.js';


let reducers= combineReducers({
	nav: nav,
	trackList: trackList,
	player: player
});

let store= createStore(reducers);

export default store;