import React from 'react';
import { Link } from 'react-router-dom';


class Logo extends React.Component{
	constructor(props){
		super(props);
		this.props= this.state;
	}

	homePage(){
		this.props.homePage();
	}

	render(){
		return(
			<Link to="/" onClick={ this.homePage.bind(this) } className={ `Logo Logo_${ this.props.clsMod }` }>
				<img src={ require('./logo.png') } alt="logo" />
			</Link>
		)
	}
}

export default Logo;