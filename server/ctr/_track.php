<?
	switch( $_GET['action'] ){
		case('GET_TRACK_ALL'):
			echo json_encode( select__track_like($_GET['link']) );
			break;
		default:
			echo null;
	}
?>