import React from 'react';
import LogoHeader from '../LogoHeader/LogoHeader.jsx';
import NavHeader from '../NavHeader/NavHeader.jsx';


class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<header className="Header container">
				<div className="Header__row">
					<LogoHeader clsMod={'header'} />
					<NavHeader clsMod={'header'} />
				</div>
			</header>
		)
	}
}

export default Header;