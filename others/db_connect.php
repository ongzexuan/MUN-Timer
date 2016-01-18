<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "natureloveyou";

$mysqli = new mysqli($servername, $username, $password, $dbname);
if ($mysqli->connect_errno) {
	echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;

}

$res = $mysqli->query("SELECT * FROM Plant ORDER BY scientificName ASC");

$res->data_seek(0);
$json_response = array();
while ($row = $res->fetch_assoc()) {
	//echo " ScientificName = " . $row['ScientificName'] . "\n";
	//console.log($row['scientificName']);
	$row_array['scientificName'] = $row['scientificName'];
	array_push($json_response,$row_array);
}
//echo json_encode($json_response);


?>