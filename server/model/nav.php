<?
	function select__nav_all(){
		global $db;
		$sql = 'SELECT
							*
						FROM nav
						ORDER BY id ASC';
		$query= $db->query($sql, PDO::FETCH_ASSOC);
		return $query->fetchAll();
	}

?>