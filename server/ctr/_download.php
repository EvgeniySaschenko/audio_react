<?
	$file= '../music/'.$_GET['id'].'.mp3';
	header ("Content-Description: File Transfer");
	header('Content-type: audio/mpeg');
	header ("Content-Disposition: attachment; filename=".$_GET['name'].' - '.$_GET['artist'].'.mp3');
	header ("Content-Transfer-Encoding: binary");
	header ("Expires: 0");
	header ("Cache-Control: must-revalidate");
	header ("Pragma: public");
	header ("Content-Length: ".filesize($file));
	header('Cache-Control: max-age=3600');
	ob_clean();
	flush();
	readfile($file);
	exit();
?>