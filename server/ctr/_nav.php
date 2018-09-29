<?
	switch( $_GET['action'] ){
		case('GET_NAV_ALL'):
			echo json_encode( select__nav_all() );
			break;
		default:
			echo null;
	}
?>