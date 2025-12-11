<?php
$pw = $_GET['pw'] ?? '';
if($pw !== 'change-me') { echo 'Unauthorized'; exit; }
$conn = new mysqli('localhost','dbuser','dbpass','runwithease');
$res = $conn->query('SELECT * FROM bookings ORDER BY created_at DESC LIMIT 500');
while($r = $res->fetch_assoc()){
  echo "<div><strong>".htmlspecialchars($r['name'])."</strong> (".htmlspecialchars($r['phone']).") - ".htmlspecialchars($r['service'])."<div>".nl2br(htmlspecialchars($r['details']))."</div><hr></div>";
}
?>