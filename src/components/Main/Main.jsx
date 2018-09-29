import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TrackList from '../TrackList/TrackList.jsx';


class Main extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<main className="Main container">
				<Switch>
					<Route exact path='*' component={ TrackList }/>
				</Switch>
			</main>
		)
	}

}

export default Main;