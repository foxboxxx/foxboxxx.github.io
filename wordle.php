<?php
header("Content-Type: application/json");

$date = date("Y-m-d");
$url = "https://www.nytimes.com/svc/wordle/v2/$date.json";

echo file_get_contents($url);