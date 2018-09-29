<? 

	function select__track_like($link){
		global $db;
		$sql = "SELECT
							t.*,
							TIME_FORMAT(t.duration, '%i:%s') as duration,
							n.name AS name_genre,
							n.link AS link_genre
						FROM track t
						INNER JOIN nav n ON n.id = t.id_genre
						WHERE n.link LIKE ?
						ORDER BY t.id_genre ASC, t.name ASC";
		$query= $db->prepare( $sql, array(PDO::FETCH_ASSOC) );
		$query->execute( array("%$link%") );
		return $query->fetchAll();
	}

?>