<?php
$uri =   $_SERVER["REQUEST_URI"];
$require_flag = "require!";
if (preg_match('!\.php$!', $uri)) {
    require basename($uri);
} else if (strpos($uri, '.')) { 
    return false; // serve the requested file as-is.
} else {
    $params  = explode('/', substr($uri, 1));
    include "index.php";
}
?>