<?php
// submit_booking.php
header('Content-Type: application/json');
$dbhost='localhost'; $dbuser='dbuser'; $dbpass='dbpass'; $dbname='runwithease';
$conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
if($conn->connect_error) die(json_encode(['error'=>'db']));
$name = $conn->real_escape_string($_POST['name'] ?? '');
$phone = $conn->real_escape_string($_POST['phone'] ?? '');
$service = $conn->real_escape_string($_POST['service'] ?? '');
$details = $conn->real_escape_string($_POST['details'] ?? '');
if(!$name||!$phone||!$details) { echo json_encode(['error'=>'missing']); exit; }
$stmt = $conn->prepare("INSERT INTO bookings (name,phone,service,details) VALUES (?,?,?,?)");
$stmt->bind_param('ssss',$name,$phone,$service,$details);
$ok = $stmt->execute();
$stmt->close(); $conn->close();
if($ok) echo json_encode(['ok'=>true]); else echo json_encode(['error'=>'savefail']);
?>