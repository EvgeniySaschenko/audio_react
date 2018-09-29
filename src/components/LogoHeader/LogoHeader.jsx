import { connect } from 'react-redux';
import Logo from '../_proto/Logo/Logo.jsx';


class LogoHeader extends Logo{
	constructor(props){
		super(props);
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
			homePage: ()=>{
				dispatch({
					type: 'ALL_TRACK_LIST',
					url: '/'
				})
			}
		}
	}
)(LogoHeader);