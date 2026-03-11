<?php

/**
 * Express Backend API Proxy
 * Forwards requests from Apache (Hostinger) to the local Node.js/Express process
 */

// Target Express JS backend URL (running on local machine via PM2 or node)
$targetUrl = 'http://localhost:3001' . $_SERVER['REQUEST_URI'];

$headers = [];
$requestHeaders = getallheaders();

foreach ($requestHeaders as $key => $value) {
    if (strtolower($key) !== 'host') { // Don't forward the original Host header to prevent loopbacks
        $headers[] = "$key: $value";
    }
}

// Ensure the client IP is passed to the backend
$clientIp = $_SERVER['HTTP_CLIENT_IP'] 
    ?? $_SERVER['HTTP_X_FORWARDED_FOR'] 
    ?? $_SERVER['REMOTE_ADDR'];
$headers[] = "X-Forwarded-For: $clientIp";

$ch = curl_init($targetUrl);

// Set appropriate cURL options based on request method
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT' || $_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $body = file_get_contents('php://input');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
}

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true); // We want the headers to extract status code and response headers

// Execute the request
$response = curl_exec($ch);

if (curl_errno($ch)) {
    // If Express backend is down, return a 502 Bad Gateway
    http_response_code(502);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'API Gateway Error', 'details' => curl_error($ch)]);
} else {
    $headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $responseHeaders = substr($response, 0, $headerSize);
    $responseBody = substr($response, $headerSize);
    $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Forward HTTP Status Code
    http_response_code($statusCode);

    // Forward Response Headers
    $headerLines = explode("\r\n", $responseHeaders);
    foreach ($headerLines as $header) {
        if (!empty($header) && strpos($header, 'Transfer-Encoding') === false) { // Transfer-Encoding shouldn't be forwarded blindly
            header($header);
        }
    }

    // Output Body
    echo $responseBody;
}

curl_close($ch);
