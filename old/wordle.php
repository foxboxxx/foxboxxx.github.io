<?php
$date = date('Y-m-d');
$url = "https://www.nytimes.com/svc/wordle/v2/$date.json";

$json = @file_get_contents($url);
$solution = "ERROR";

if ($json) {
    $data = json_decode($json, true);
    if (isset($data['solution'])) {
        $solution = strtoupper($data['solution']);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<body>
    <pre><?php echo $solution; ?></pre>
</body>
</html>