import React from 'react';
import Main from './Main/Main.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Player from './Player/Player.jsx';

class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="App">
				<Header />
				<Main />
				<Player />
				<Footer />
			</div>
		)
	}
}

export default App;